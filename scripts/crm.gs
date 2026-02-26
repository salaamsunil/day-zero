/**
 * crm.gs — Day Zero Solutions Google Apps Script CRM
 *
 * Turns a Google Sheet into a lightweight sales pipeline.
 * Stages: New → Contacted → Demo → Trial → Customer → Lost
 *
 * Setup:
 * 1. Create a new Google Sheet
 * 2. Extensions → Apps Script → paste this script → Save
 * 3. Run setupSheet() once to create the columns and sample data
 * 4. Set up a time-based trigger for sendFollowUpReminders():
 *    Triggers → Add Trigger → sendFollowUpReminders → Time-driven → Day timer → 8am–9am
 * 5. Set NOTIFY_EMAIL below to your email address
 *
 * Columns (auto-created by setupSheet):
 *   A: ID | B: Name | C: Facility/Business | D: Email | E: Phone
 *   F: Product | G: State | H: Stage | I: Last Contact Date
 *   J: Next Follow-up | K: Follow-up Day | L: Notes | M: Profile URL
 */

const NOTIFY_EMAIL = "hello@day-zero.com.au"; // ← change to your email
const SHEET_NAME = "Pipeline";

const STAGES = ["New", "Contacted", "Demo Scheduled", "Trial", "Customer", "Lost"];
const PRODUCTS = ["NutriCare", "RestroStock", "QueueZero"];
const STATES = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"];

// Follow-up day targets per stage (days since last contact)
const FOLLOW_UP_DAYS = {
  "New": 1,
  "Contacted": 4,
  "Demo Scheduled": 1,
  "Trial": 7,
};

const STAGE_COLORS = {
  "New":            "#E8F5E9",
  "Contacted":      "#E3F2FD",
  "Demo Scheduled": "#FFF9C4",
  "Trial":          "#FCE4EC",
  "Customer":       "#E8F5E9",
  "Lost":           "#F5F5F5",
};

const HEADERS = [
  "ID", "Name", "Facility / Business", "Email", "Phone",
  "Product", "State", "Stage", "Last Contact", "Next Follow-up",
  "Follow-up Day", "Notes", "Profile URL"
];

// ─── Setup ───────────────────────────────────────────────────────────────────

function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  } else {
    sheet.clearContents();
    sheet.clearFormats();
  }

  // Header row
  const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRange.setValues([HEADERS]);
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#2D2D5B");
  headerRange.setFontColor("#FFFFFF");
  headerRange.setFontSize(10);

  // Freeze header
  sheet.setFrozenRows(1);

  // Column widths
  const colWidths = [50, 160, 200, 220, 120, 110, 60, 120, 110, 110, 80, 300, 280];
  colWidths.forEach((w, i) => sheet.setColumnWidth(i + 1, w));

  // Data validation: Stage
  const stageRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(STAGES)
    .setAllowInvalid(false)
    .build();

  // Data validation: Product
  const productRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(PRODUCTS)
    .setAllowInvalid(false)
    .build();

  // Data validation: State
  const stateRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(STATES)
    .setAllowInvalid(false)
    .build();

  sheet.getRange("H2:H1000").setDataValidation(stageRule);
  sheet.getRange("F2:F1000").setDataValidation(productRule);
  sheet.getRange("G2:G1000").setDataValidation(stateRule);

  // Date format for columns I and J
  sheet.getRange("I2:J1000").setNumberFormat("dd/mm/yyyy");

  // Add sample rows
  const sampleRows = [
    ["001", "Margaret Chen", "Sunrise Aged Care", "m.chen@sunriseaged.com.au",
     "03 9xxx xxxx", "NutriCare", "VIC", "New",
     new Date(), addDays(new Date(), 1), 1, "Found via Aged Care Guide", ""],
    ["002", "James Patel", "The Italian Place", "james@italianplace.com.au",
     "02 9xxx xxxx", "RestroStock", "NSW", "Contacted",
     addDays(new Date(), -3), addDays(new Date(), 1), 4, "Responded positively to Email 1", ""],
  ];
  sheet.getRange(2, 1, sampleRows.length, HEADERS.length).setValues(sampleRows);

  // Apply stage colors to sample rows
  sampleRows.forEach((row, i) => {
    const stage = row[7];
    const color = STAGE_COLORS[stage] || "#FFFFFF";
    sheet.getRange(i + 2, 1, 1, HEADERS.length).setBackground(color);
  });

  // Banding
  const banding = sheet.getRange(1, 1, 1000, HEADERS.length).applyRowBanding(
    SpreadsheetApp.BandingTheme.LIGHT_GREY
  );
  banding.setHeaderRowColor("#2D2D5B");

  SpreadsheetApp.getUi().alert(
    "CRM setup complete!\n\n" +
    "Next steps:\n" +
    "1. Add a daily trigger for sendFollowUpReminders()\n" +
    "2. Run importFromCSV() to bulk-import prospects\n" +
    "3. Start working through the New stage!"
  );
}

// ─── Add prospect ─────────────────────────────────────────────────────────────

function addProspect(name, facility, email, phone, product, state, notes, profileUrl) {
  const sheet = getSheet();
  const id = getNextId(sheet);
  const today = new Date();
  const followUpDays = FOLLOW_UP_DAYS["New"] || 1;

  sheet.appendRow([
    id, name, facility, email, phone,
    product, state, "New",
    today, addDays(today, followUpDays), followUpDays,
    notes || "", profileUrl || ""
  ]);

  const lastRow = sheet.getLastRow();
  sheet.getRange(lastRow, 1, 1, HEADERS.length)
    .setBackground(STAGE_COLORS["New"]);
  sheet.getRange(lastRow, 9, 1, 2).setNumberFormat("dd/mm/yyyy");

  return id;
}

// ─── Update stage ─────────────────────────────────────────────────────────────

function updateStage(rowIndex, newStage, notes) {
  const sheet = getSheet();
  const today = new Date();
  const followUpDays = FOLLOW_UP_DAYS[newStage] || 7;

  sheet.getRange(rowIndex, 8).setValue(newStage);
  sheet.getRange(rowIndex, 9).setValue(today).setNumberFormat("dd/mm/yyyy");
  sheet.getRange(rowIndex, 10).setValue(addDays(today, followUpDays)).setNumberFormat("dd/mm/yyyy");
  sheet.getRange(rowIndex, 11).setValue(followUpDays);

  if (notes) {
    const existingNotes = sheet.getRange(rowIndex, 12).getValue();
    const newNotes = existingNotes
      ? `${existingNotes}\n[${formatDate(today)}] ${notes}`
      : `[${formatDate(today)}] ${notes}`;
    sheet.getRange(rowIndex, 12).setValue(newNotes);
  }

  const color = STAGE_COLORS[newStage] || "#FFFFFF";
  sheet.getRange(rowIndex, 1, 1, HEADERS.length).setBackground(color);
}

// ─── Follow-up reminders ─────────────────────────────────────────────────────

function sendFollowUpReminders() {
  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const overdueRows = [];

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const stage = row[7];
    const nextFollowUp = row[9];

    if (!nextFollowUp || !["New", "Contacted", "Demo Scheduled", "Trial"].includes(stage)) {
      continue;
    }

    const followDate = new Date(nextFollowUp);
    followDate.setHours(0, 0, 0, 0);

    if (followDate <= today) {
      overdueRows.push({
        id: row[0],
        name: row[1],
        facility: row[2],
        email: row[3],
        product: row[5],
        stage: stage,
        daysOverdue: Math.floor((today - followDate) / (1000 * 60 * 60 * 24)),
        nextFollowUp: formatDate(followDate),
        notes: row[11],
      });
    }
  }

  if (overdueRows.length === 0) {
    Logger.log("No follow-ups due today.");
    return;
  }

  const subject = `Day Zero CRM: ${overdueRows.length} follow-up${overdueRows.length > 1 ? "s" : ""} due`;
  const body = buildReminderEmail(overdueRows);

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: subject,
    htmlBody: body,
  });

  Logger.log(`Sent reminder for ${overdueRows.length} prospects to ${NOTIFY_EMAIL}`);
}

function buildReminderEmail(rows) {
  const rows_html = rows.map(r => `
    <tr>
      <td style="padding:8px;border-bottom:1px solid #eee"><strong>${r.name}</strong><br>
        <small style="color:#666">${r.facility}</small></td>
      <td style="padding:8px;border-bottom:1px solid #eee">${r.product}</td>
      <td style="padding:8px;border-bottom:1px solid #eee">${r.stage}</td>
      <td style="padding:8px;border-bottom:1px solid #eee;color:${r.daysOverdue > 2 ? '#c0392b' : '#333'}">
        ${r.daysOverdue === 0 ? "Today" : `${r.daysOverdue}d overdue`}</td>
      <td style="padding:8px;border-bottom:1px solid #eee">${r.email}</td>
    </tr>
  `).join("");

  return `
    <div style="font-family:Inter,sans-serif;max-width:700px;margin:0 auto">
      <div style="background:#2D2D5B;color:#fff;padding:20px 24px;border-radius:8px 8px 0 0">
        <h2 style="margin:0;font-size:1.2rem">Day Zero CRM — Follow-ups Due</h2>
        <p style="margin:6px 0 0;opacity:0.8;font-size:0.9rem">${new Date().toDateString()}</p>
      </div>
      <div style="background:#f8f9fa;padding:20px 24px">
        <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06)">
          <thead>
            <tr style="background:#f0f0f0">
              <th style="padding:10px 8px;text-align:left;font-size:0.85rem">Prospect</th>
              <th style="padding:10px 8px;text-align:left;font-size:0.85rem">Product</th>
              <th style="padding:10px 8px;text-align:left;font-size:0.85rem">Stage</th>
              <th style="padding:10px 8px;text-align:left;font-size:0.85rem">Due</th>
              <th style="padding:10px 8px;text-align:left;font-size:0.85rem">Email</th>
            </tr>
          </thead>
          <tbody>${rows_html}</tbody>
        </table>
        <p style="margin-top:16px;font-size:0.85rem;color:#666">
          Open your <a href="https://docs.google.com/spreadsheets" style="color:#7C3AED">Google Sheet CRM</a>
          to update stages and log notes.
        </p>
      </div>
    </div>
  `;
}

// ─── CSV Import ───────────────────────────────────────────────────────────────

/**
 * importFromCSV — import prospects from a CSV uploaded to Google Drive.
 * 1. Upload your CSV to Google Drive
 * 2. Replace FILE_ID below with the file's ID
 * 3. Run this function
 */
function importFromCSV() {
  const FILE_ID = "YOUR_GOOGLE_DRIVE_FILE_ID"; // ← replace this

  try {
    const file = DriveApp.getFileById(FILE_ID);
    const content = file.getBlob().getDataAsString();
    const rows = Utilities.parseCsv(content);

    if (rows.length < 2) {
      SpreadsheetApp.getUi().alert("CSV appears empty.");
      return;
    }

    const headerRow = rows[0].map(h => h.toLowerCase().trim());
    const getCol = (name) => headerRow.indexOf(name);

    const idxName = getCol("contact_name") > -1 ? getCol("contact_name") : getCol("name");
    const idxFacility = getCol("facility_name");
    const idxEmail = getCol("email");
    const idxPhone = getCol("phone");
    const idxProduct = getCol("product");
    const idxState = getCol("state");
    const idxNotes = getCol("notes");
    const idxUrl = getCol("profile_url");

    let added = 0;
    for (let i = 1; i < rows.length; i++) {
      const r = rows[i];
      if (!r[idxFacility]) continue;

      addProspect(
        idxName > -1 ? r[idxName] : "Unknown",
        r[idxFacility],
        idxEmail > -1 ? r[idxEmail] : "",
        idxPhone > -1 ? r[idxPhone] : "",
        idxProduct > -1 ? r[idxProduct] : "NutriCare",
        idxState > -1 ? r[idxState] : "",
        idxNotes > -1 ? r[idxNotes] : "",
        idxUrl > -1 ? r[idxUrl] : ""
      );
      added++;
    }

    SpreadsheetApp.getUi().alert(`Imported ${added} prospects from CSV.`);
  } catch (e) {
    SpreadsheetApp.getUi().alert(`Error: ${e.message}`);
  }
}

// ─── Pipeline dashboard ───────────────────────────────────────────────────────

function showDashboard() {
  const sheet = getSheet();
  const data = sheet.getDataRange().getValues().slice(1);

  const counts = {};
  STAGES.forEach(s => counts[s] = 0);
  data.forEach(row => {
    const stage = row[7];
    if (counts[stage] !== undefined) counts[stage]++;
  });

  const lines = STAGES.map(s => `${s}: ${counts[s]}`).join("\n");
  const total = data.length;

  SpreadsheetApp.getUi().alert(
    `Pipeline Summary (${total} total)\n\n${lines}\n\n` +
    `Customers: ${counts["Customer"]}  |  Active: ${total - counts["Lost"] - counts["Customer"]}`
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) throw new Error(`Sheet "${SHEET_NAME}" not found. Run setupSheet() first.`);
  return sheet;
}

function getNextId(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return "001";
  const existing = sheet.getRange(2, 1, lastRow - 1, 1).getValues()
    .map(r => parseInt(r[0], 10))
    .filter(n => !isNaN(n));
  const max = existing.length ? Math.max(...existing) : 0;
  return String(max + 1).padStart(3, "0");
}

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function formatDate(d) {
  return d.toLocaleDateString("en-AU", { day: "2-digit", month: "2-digit", year: "numeric" });
}

// ─── Custom menu ──────────────────────────────────────────────────────────────

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Day Zero CRM")
    .addItem("Setup / Reset Sheet", "setupSheet")
    .addSeparator()
    .addItem("Show Pipeline Dashboard", "showDashboard")
    .addItem("Send Follow-up Reminders Now", "sendFollowUpReminders")
    .addSeparator()
    .addItem("Import from CSV (Drive)", "importFromCSV")
    .addToUi();
}
