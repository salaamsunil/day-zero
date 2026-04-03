// ============================================================
// REUNION DATA — edit this file to update the page
// ============================================================

const REUNION_DATA = {

  school: {
    name: "Dr G V Joshi Rotary English Medium School",
    location: "Hubballi, Karnataka",
    batch: "Class of 2001"
  },

  event: {
    dates: ["2026-04-18", "2026-04-19"],
    venue: "Dennison Hotel",
    venueAddress: "Dennison Hotel, Hubballi, Karnataka",
    signupAmount: "5,500",
    signupCurrency: "INR",
    signupDeadline: "2026-04-16",
    includes: [
      "Two full days of celebration",
      "T-shirt for all attendees",
      "Breakfast and lunch both days",
      "Games, performances and surprises",
      "Group photo session"
    ],
    whatsappLink: "https://wa.me/",
    mapsEmbed: "https://maps.google.com/maps?q=Dennison+Hotel+Hubballi+Karnataka&output=embed",

    // UPI payment — save the QR image as reunion/upi-qr.png in the project folder
    upiId: "vinodsolanki70@oksbi",
    upiQrImage: "/reunion/upi-qr.png",
    upiDeepLink: "upi://pay?pa=vinodsolanki70@oksbi&pn=Vinod%20Solanki&am=5500&cu=INR",

    // Google Forms sign-up link
    signupFormUrl: "https://forms.gle/iei9DFGvm56DPruM6",

    // Talent show / performance registration
    talentFormUrl: "https://forms.gle/ZGv5aSUMtWRASEENA",
    talentDeadline: "2026-04-07"
  },

  stats: {
    confirmed: 76,
    thinking: 60,
    teachers: 0,
    totalInvited: 130
  },

  // STATUS VALUES: "confirmed" | "thinking" | "notcoming"
  // isTeacher: true = shows under Teachers filter tab
  // photo: set to a public image URL to show a photo instead of initials
  // flag: emoji flag for the country they're travelling from
  // Profile fields (from Google Form): org, role, linkedin, education, achievement
  attendees: [

    // ── Confirmed ────────────────────────────────────────────
    { name: "Sridhar B",                  location: "Navi Mumbai, IN",    status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Kolte Patil Pvt Ltd",                  education: "PG",       linkedin: null,
      achievement: "Active member, Udaal Hugugara Sangha" },

    { name: "Girish M Hiremath",          location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Tech Mahindra Ltd",                     education: "PG",       linkedin: "https://www.linkedin.com/in/girishmhiremath/",
      achievement: null },

    { name: "Amit Inamdar",               location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Toyota Kirloskar Motor Pvt Ltd",        education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Megha Shankarappa Pattar",   location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "TransUnion",                            education: null,       linkedin: "https://www.linkedin.com/in/megha-pattar-8aa25b190",
      achievement: "PMP certified professional" },

    { name: "Anand Sampath",              location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: "RV Drug House",                         education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Ashwini Patil",              location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: "Aum Cosmic Insights",                   education: "PG",       linkedin: null,
      achievement: null },

    { name: "Chandan Ijari",              location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Systech Technologies",                  education: "Diploma",  linkedin: null,
      achievement: null },

    { name: "Vinod Solanki",              location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: null,                                    education: null,       linkedin: null,
      achievement: null },

    { name: "Vandana Jain",               location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Home Maker", org: null,                                    education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Shradha Arjun Athani",       location: "Hyderabad, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Optum",                                 education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Raju Rottigawad",            location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: "GSR Technologies",                      education: "Diploma",  linkedin: null,
      achievement: null },

    { name: "Sushant Kemtur",             location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: "Hotel Ayodhya",                         education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Darshan Gotadke",            location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: "Auto Mac Diesels",                      education: "PG",       linkedin: null,
      achievement: null },

    { name: "Vijaykumar Math",            location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: null,                                    education: null,       linkedin: null,
      achievement: null },

    { name: "Abhishek Mande",             location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: "M.M. Industrial Controls Pvt Ltd",      education: "PG",       linkedin: null,
      achievement: null },

    { name: "Sneha Torgalmath",           location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Crestron Software",                     education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Aparna Limaye",              location: "Sydney, AU",         status: "confirmed", flag: "🇦🇺", photo: null, isTeacher: false,
      role: "Business",   org: "Manatarang Counselling",                education: "PG",       linkedin: "https://www.linkedin.com/in/aparna-dixit-9baa6711",
      achievement: "First Practitioner of Music Therapy in Huballi; Founding member, Indian Music Therapy Association" },

    { name: "Srikanth B",                 location: "Hyderabad, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: "Capricorn Exports",                     education: null,       linkedin: null,
      achievement: null },

    { name: "Shilpa R Shibargatti",       location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: "Finbunny Network",                      education: "Diploma",  linkedin: null,
      achievement: null },

    { name: "Chetana D Joshi",            location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Government", org: "SBI",                                   education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Sagar Tonapi",               location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Wartsila",                              education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Vinay Arjun Chug",           location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: "Amarjyoti Creation",                    education: "Graduate", linkedin: null,
      achievement: "Sindhi Cricket; BNI Leadership Team" },

    { name: "Naina Nadkarni",             location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: null,         org: null,                                    education: null,       linkedin: null,
      achievement: null },

    { name: "Mihir Nayak",                location: "Dharwad, IN",        status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Shambhavi Kids & Family Dental Clinic", education: "PG",       linkedin: "https://www.linkedin.com/in/dr-mihir-nayak-42b737161",
      achievement: null },

    { name: "Arjun J Hebsur",             location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: "Shubhodaya AC Convention Hall & Amaze Agencies", education: "PG", linkedin: null,
      achievement: "Best Convention Hall, North Karnataka; Past Chairman, Round Table India" },

    { name: "Vikramaditya J M",           location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: "Lipi Enterprises",                      education: "PG",       linkedin: null,
      achievement: null },

    { name: "Sunil Reddy",                location: "Brisbane, AU",       status: "confirmed", flag: "🇦🇺", photo: null, isTeacher: false,
      role: "Private",    org: "Compass Group Australia",               education: "PG",       linkedin: "https://www.linkedin.com/in/bonjoursunil",
      achievement: "Masters, University of Queensland; PMP certified" },

    { name: "Prasanna Shantaram Hegde",   location: "Sagar, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Government", org: "Bank of Baroda",                        education: "PG",       linkedin: null,
      achievement: null },

    { name: "Pavan Kulkarni",             location: "Dharwad, IN",        status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Uni Abex Alloy Products Ltd",           education: "Graduate", linkedin: "https://www.linkedin.com/in/pavan-kulkarni-665059264",
      achievement: null },

    { name: "Rajeev Dalavi",              location: "Melbourne, AU",      status: "confirmed", flag: "🇦🇺", photo: null, isTeacher: false,
      role: "Private",    org: null,                                    education: null,       linkedin: "https://www.linkedin.com/in/rajeev-dalavi/",
      achievement: null },

    { name: "Anand Kumar R",              location: "Sydney, AU",         status: "confirmed", flag: "🇦🇺", photo: null, isTeacher: false,
      role: "Private",    org: "HCLTech",                               education: "PG",       linkedin: null,
      achievement: null },

    { name: "Ashwin Pujari",              location: "Bahrain",            status: "confirmed", flag: "🇧🇭", photo: null, isTeacher: false,
      role: "Private",    org: "Oracle",                                education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Chetan Salian",              location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "VSCO",                                  education: null,       linkedin: null,
      achievement: null },

    { name: "Aditya Kulkarni",            location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: null,         org: null,                                    education: null,       linkedin: null,
      achievement: null },

    { name: "Sachin Khatavkar",           location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: null,                                    education: null,       linkedin: null,
      achievement: null },

    { name: "Rashmi Dharmdas",            location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Home Maker", org: null,                                    education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Hemanth Joshi",              location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Standard Chartered Bank",               education: "Graduate", linkedin: "https://www.linkedin.com/in/hemanth-joshi-2ba8b32b",
      achievement: null },

    { name: "Pavan Shankar Guledgudda",   location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: "Lala Impex LLP",                        education: "Graduate", linkedin: null,
      achievement: "Top networker and highest referral giver, BNI Hallmark Chapter, Hubli-Dharwad" },

    { name: "Kejal Shah",                 location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Home Maker", org: null,                                    education: "Diploma",  linkedin: null,
      achievement: null },

    { name: "Yogini Kamat",               location: "Mangalore, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Home Maker", org: null,                                    education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Rajani Gad",                 location: "Chennai, IN",        status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Tata Elxsi",                            education: "PhD",      linkedin: "https://in.linkedin.com/in/dr-rajani-gad-34842521",
      achievement: "APJ Kalam Award for Scientific Research; Social Service Badge, Team Everest" },

    { name: "Vidya Baddi",                location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Home Maker", org: null,                                    education: null,       linkedin: null,
      achievement: null },

    { name: "Hajira Khazi",               location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Home Maker", org: null,                                    education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Avinash Yalagi",             location: "Pune, IN",           status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: null,                                    education: null,       linkedin: null,
      achievement: null },

    { name: "Vishal Hosalkar",            location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "JSSP",                                  education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Akshay G Terdal",            location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Nidec Industrial Automation India Pvt Ltd", education: null,   linkedin: null,
      achievement: null },

    { name: "Sangamesh Madakatti",        location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Aakash Educational Services Ltd",       education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Varsha Deshpande",           location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Cognizant Technologies",                education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Nayana S Ankola",            location: "Zurich, CH",         status: "confirmed", flag: "🇨🇭", photo: null, isTeacher: false,
      role: "Private",    org: "EPAM Systems",                          education: "Graduate", linkedin: "https://www.linkedin.com/in/nayana-shetti",
      achievement: null },

    { name: "Gururaj Kulkarni",           location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Circana India Pvt Ltd",                 education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Tanmay Patil",               location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: null,                                    education: null,       linkedin: null,
      achievement: null },

    { name: "Prashant Mohan Dani",        location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: "General Mechanical Works",              education: "PG",       linkedin: null,
      achievement: null },

    { name: "Vinay Cheltur",              location: "Pune, IN",           status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Tata Motors Ltd",                       education: "PG",       linkedin: null,
      achievement: null },

    { name: "Vandana Laddar",             location: "Goa, IN",            status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: "Suvidha Kitchen",                       education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Yogesh Karandikar",          location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: "2i Tech Solutions",                     education: "PG",       linkedin: null,
      achievement: null },

    { name: "Shwetha Chatpalli",          location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: null,                                    education: "PG",       linkedin: null,
      achievement: null },

    { name: "Vinay Kunchurkar",           location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: "Renuka Medical Centre / Aradhya Finserv", education: "Graduate", linkedin: null,
      achievement: "Topped strategic and asset allocation expert programs by HDFC, SBI, ICICI and other AMCs" },

    { name: "Ravi Puranikmath",           location: "Hospet, IN",         status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "JSW Steel Limited",                     education: "PG",       linkedin: null,
      achievement: "Technical Analyst, JSW Vijaynagar Plant (18 MT)" },

    { name: "Akshay Konnur",              location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: "Konnur Hospital",                       education: "PG",       linkedin: null,
      achievement: null },

    { name: "Sandeep Kulkarni",           location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Infosys",                               education: "Graduate", linkedin: "https://www.linkedin.com/in/sandeep-kulkarni-64146b48",
      achievement: "IIM Rohtak certificate programme; Founding President, Corporate Toastmasters Club" },

    { name: "Swati Patnekar",             location: "Melbourne, AU",      status: "confirmed", flag: "🇦🇺", photo: null, isTeacher: false,
      role: "Private",    org: null,                                    education: "PG",       linkedin: null,
      achievement: null },

    { name: "Santoshkumar Kalburgi",      location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: null,                                    education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Shweta D Kulkarni",          location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "SDM University Dharwad",                education: "PG",       linkedin: null,
      achievement: "Significant Contribution Award, Karnataka Physiocon (twice); Best Paper, International Conference of Physiotherapy" },

    { name: "Mudigouda Andanigoudar",     location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: null,                                    education: "Graduate", linkedin: null,
      achievement: "Gold Rating, Business Excellence Implementation, Tata Motors" },

    { name: "Pramod Makannavar",          location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Shatayu Hospital and Research Institute", education: "PG",     linkedin: null,
      achievement: null },

    { name: "Sumann Kanchan",             location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Tata AIG",                              education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Harsha Gourish",             location: "Pune, IN",           status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Accenture",                             education: "Graduate", linkedin: "https://www.linkedin.com/in/harsha-gourish-2902a123",
      achievement: null },

    { name: "Ranjeeta Elkal",             location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Mahaveer Education Society",            education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Rakesh Mehtha",              location: "Mumbai, IN",         status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: null,                                    education: "PG",       linkedin: null,
      achievement: null },

    { name: "Aravind Halyal",             location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: "Dell International Services India Pvt Ltd", education: "Graduate", linkedin: null,
      achievement: null },

    { name: "Snehal S Sapkal",            location: "Pune, IN",           status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: "Weld Spot",                             education: "Diploma",  linkedin: null,
      achievement: null },

    { name: "Almas Nadaf",                location: "Hubli, IN",          status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Government", org: "WCD Dept",                              education: "PG",       linkedin: null,
      achievement: null },

    { name: "Rahul Kulloli",              location: "Belagavi, IN",       status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Business",   org: null,                                    education: null,       linkedin: null,
      achievement: null },

    { name: "Hiremath Ashwini Basavaraj", location: "Belagavi, IN",       status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Government", org: "B.V. Bellad Law College",               education: "PhD",      linkedin: null,
      achievement: null },

    { name: "Nayana Baradwad",            location: "Bengaluru, IN",      status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: "Private",    org: null,                                    education: null,       linkedin: null,
      achievement: null },

    { name: "Umesh Akki",                 location: "India",              status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false,
      role: null,         org: null,                                    education: null,       linkedin: null,
      achievement: null },

    // ── Still deciding ───────────────────────────────────────
    { name: "Aditi Hombali",              location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Akshata Shanbag",            location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ameetkumar Dalvi",           location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Amruta M Salimath",          location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Anand Bengeri",              location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Anand G Akki",              location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Anand S",                    location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Anandkumar R",               location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Anoopkumar Patil",           location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Anup U S",                   location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Aparna Barge",               location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ashok Kumar Ostwal",         location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ashwin S",                   location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ashwini N L",                location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ashwini Patil",              location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Bharath Acharya",            location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Bhargavi S Kotate",          location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Chaitra Deshnur",            location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Chetan Shetty",              location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Chinmayi",                   location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Deepa Navale",               location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ganga Desai",                location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Govindaraju R S",            location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Kala",                       location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Kavita Kalyan",              location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Kubra Naaz",                 location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Mahendra Apte",              location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Manoj Sangam",               location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Manojkumar Wali",            location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Naveena Thakur",             location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Neetu Oswal",                location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Nitin Bhat",                 location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Parmjitkaur Virdi",          location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Pavankumar Bhapkar",         location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Pooja Hanagandi",            location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Priyadarshini Kulkarni",     location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Priyanka Tilavalli",         location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Rakesh Kombali",             location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ramyashree B S",             location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sandesh N Shetty",           location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sangeeta Pai",               location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sanjay Kumar Jain",          location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Shilpa Kamatar",             location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Shubha L",                   location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Shweta Sullad",              location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sirish D H",                 location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sneha Kurtkoti",             location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sumit Baddi",                location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Supriya Sangodimath",        location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sweta Patil",                location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Tuljappa Mudhol",            location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Umesh Alur",                 location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Urmila R Vemal",             location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Veena Hottimath",            location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Venkatesh Jahagirdar",       location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Vidya Pai",                  location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Vinay Revankar",             location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Vinayak Habib",              location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Vishwas P",                  location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Vivekananda Panchangmath",   location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false }
  ],

  // Travel map markers — isVenue:true marks the destination (Hubballi)
  travelPins: [
    { city: "Hubballi",    lat: 15.3647,   lng: 75.1240,   count: 20, isVenue: true },
    { city: "Bangalore",   lat: 12.9716,   lng: 77.5946,   count: 23 },
    { city: "Sydney",      lat: -33.8688,  lng: 151.2093,  count: 2  },
    { city: "Melbourne",   lat: -37.8136,  lng: 144.9631,  count: 2  },
    { city: "Brisbane",    lat: -27.4698,  lng: 153.0251,  count: 1  },
    { city: "Pune",        lat: 18.5204,   lng: 73.8567,   count: 2  },
    { city: "Hyderabad",   lat: 17.3850,   lng: 78.4867,   count: 2  },
    { city: "Dharwad",     lat: 15.4589,   lng: 74.9976,   count: 2  },
    { city: "Chennai",     lat: 13.0827,   lng: 80.2707,   count: 1  },
    { city: "Bahrain",     lat: 26.0667,   lng: 50.5577,   count: 1  },
    { city: "Zurich",      lat: 47.3769,   lng: 8.5417,    count: 1  },
    { city: "Ernakulam",   lat: 9.9312,    lng: 76.2673,   count: 1  },
    { city: "Goa",         lat: 15.2993,   lng: 74.1240,   count: 1  },
    { city: "Hospet",      lat: 15.2691,   lng: 76.3873,   count: 1  },
    { city: "Mangalore",   lat: 12.9141,   lng: 74.8560,   count: 1  },
    { city: "Navi Mumbai", lat: 19.0330,   lng: 73.0297,   count: 1  },
    { city: "Sagar",       lat: 14.1668,   lng: 75.0272,   count: 1  }
  ],

  // Teacher tribute cards — to be added once names are confirmed
  teachers: [],

  // Announcements — add new ones at the TOP of this array (newest first)
  announcements: [
    {
      date: "2026-03-23",
      title: "76 batchmates confirmed!",
      text: "We have 76 confirmed attendees and the list is growing. Sign up before 16 April to secure your spot!"
    },
    {
      date: "2026-03-23",
      title: "Sign-up extended to 16 April",
      text: "Great news! Registration is now open until 16 April. Note: t-shirts are only guaranteed for those who signed up by 22 March. Pay via UPI to Vinod Solanki (vinodsolanki70@oksbi) and fill the Google Form to complete your registration."
    },
    {
      date: "2026-03-22",
      title: "T-shirts confirmed!",
      text: "T-shirts have been locked in for everyone who signed up by 22 March. You can still register until 16 April to join us, but t-shirts are not guaranteed after the cutoff."
    },
    {
      date: "2025-12-21",
      title: "Venue locked in",
      text: "Dennison Hotel in Hubballi is confirmed for both days of April 18 and 19. We have the entire banquet hall reserved just for us."
    },
    {
      date: "2025-12-15",
      title: "Teachers are joining us!",
      text: "Several of our beloved teachers have confirmed attendance. Share this page and encourage more classmates to sign up!"
    }
  ]

};
