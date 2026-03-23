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
    signupDeadline: "2026-03-31",
    includes: [
      "Two full days of celebration",
      "T-shirt for all attendees",
      "Breakfast and lunch both days",
      "Games, performances and surprises",
      "Group photo session"
    ],
    whatsappLink: "https://chat.whatsapp.com/REPLACE_WITH_REAL_LINK",
    // UPI payment details — fill in when ready
    // upiId: "yourname@upi",
    // upiQrImage: "/reunion/upi-qr.jpg",
    // upiDeepLink: "upi://pay?pa=yourname@upi&pn=Reunion2026&am=5500&cu=INR",
    upiId: null,
    upiQrImage: null,
    upiDeepLink: null,
    // Google Forms sign-up link — fill in when ready
    // signupFormUrl: "https://forms.gle/YOURFORMID",
    signupFormUrl: null,
    // Replace with the embed URL from Google Maps for Dennison Hotel, Hubballi
    mapsEmbed: "https://maps.google.com/maps?q=Dennison+Hotel+Hubballi+Karnataka&output=embed"
  },

  stats: {
    confirmed: 62,
    thinking: 41,
    teachers: 6,
    totalInvited: 130
  },

  // STATUS VALUES: "confirmed" | "thinking" | "notcoming"
  // isTeacher: true = shows under Teachers filter tab
  // photo: set to a public image URL to show a photo instead of initials
  // flag: emoji flag for the country they're travelling from
  attendees: [
    { name: "Sunil Salaam",      location: "Melbourne, AU",    status: "confirmed",  flag: "🇦🇺", photo: null, isTeacher: false },
    { name: "Priya Malhotra",    location: "Dubai, UAE",       status: "confirmed",  flag: "🇦🇪", photo: null, isTeacher: false },
    { name: "Ravi Kumar",        location: "Hubballi, IN",     status: "confirmed",  flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Anil Patkar",       location: "Bengaluru, IN",    status: "confirmed",  flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Deepa Rao",         location: "Pune, IN",         status: "confirmed",  flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Kiran Hegde",       location: "Mumbai, IN",       status: "confirmed",  flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sanjay Kulkarni",   location: "Hyderabad, IN",    status: "confirmed",  flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Meera Joshi",       location: "Singapore",        status: "confirmed",  flag: "🇸🇬", photo: null, isTeacher: false },
    { name: "Prasad Nayak",      location: "London, UK",       status: "confirmed",  flag: "🇬🇧", photo: null, isTeacher: false },
    { name: "Anita Desai",       location: "Toronto, CA",      status: "confirmed",  flag: "🇨🇦", photo: null, isTeacher: false },
    { name: "Vikram Shetty",     location: "Hubballi, IN",     status: "confirmed",  flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Rekha Bhat",        location: "Dharwad, IN",      status: "confirmed",  flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Mahesh Patil",      location: "Bengaluru, IN",    status: "confirmed",  flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sunita Gowda",      location: "Mysuru, IN",       status: "confirmed",  flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Rahul Naik",        location: "New Delhi, IN",    status: "confirmed",  flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Poornima Desai",    location: "Hubballi, IN",     status: "confirmed",  flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Girish Kamath",     location: "Mangaluru, IN",    status: "confirmed",  flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Lakshmi Iyer",      location: "Abu Dhabi, UAE",   status: "confirmed",  flag: "🇦🇪", photo: null, isTeacher: false },
    { name: "Suresh Patil",      location: "Hubballi, IN",     status: "confirmed",  flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Nirmala Hegde",     location: "Belagavi, IN",     status: "confirmed",  flag: "🇮🇳", photo: null, isTeacher: false },
    // Still deciding
    { name: "Ajay Verma",        location: "Chennai, IN",      status: "thinking",   flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Kavitha Sharma",    location: "Kolkata, IN",      status: "thinking",   flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Suresh Iyer",       location: "San Jose, US",     status: "thinking",   flag: "🇺🇸", photo: null, isTeacher: false },
    { name: "Pooja Nair",        location: "Kuala Lumpur, MY", status: "thinking",   flag: "🇲🇾", photo: null, isTeacher: false },
    { name: "Ganesh Rao",        location: "Hubballi, IN",     status: "thinking",   flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Rohit Joshi",       location: "Bengaluru, IN",    status: "thinking",   flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Savita Kulkarni",   location: "Pune, IN",         status: "thinking",   flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Praveen Nayak",     location: "Mumbai, IN",       status: "thinking",   flag: "🇮🇳", photo: null, isTeacher: false },
    // Teachers (isTeacher: true)
    { name: "Mr. B K Patil",     location: "Hubballi, IN",     status: "confirmed",  flag: "🇮🇳", photo: null, isTeacher: true },
    { name: "Mrs. S Kulkarni",   location: "Hubballi, IN",     status: "confirmed",  flag: "🇮🇳", photo: null, isTeacher: true },
    { name: "Mr. R Joshi",       location: "Dharwad, IN",      status: "confirmed",  flag: "🇮🇳", photo: null, isTeacher: true },
    { name: "Mrs. P Bhat",       location: "Hubballi, IN",     status: "confirmed",  flag: "🇮🇳", photo: null, isTeacher: true },
    { name: "Mr. K Desai",       location: "Hubballi, IN",     status: "thinking",   flag: "🇮🇳", photo: null, isTeacher: true },
    { name: "Mrs. V Hegde",      location: "Dharwad, IN",      status: "thinking",   flag: "🇮🇳", photo: null, isTeacher: true }
  ],

  // Travel map markers — isVenue:true marks the destination (Hubballi)
  travelPins: [
    { city: "Hubballi",     lat: 15.3647,   lng: 75.1240,   count: 20, isVenue: true  },
    { city: "Bengaluru",    lat: 12.9716,   lng: 77.5946,   count: 9  },
    { city: "Mumbai",       lat: 19.0760,   lng: 72.8777,   count: 5  },
    { city: "Pune",         lat: 18.5204,   lng: 73.8567,   count: 4  },
    { city: "Hyderabad",    lat: 17.3850,   lng: 78.4867,   count: 4  },
    { city: "Dubai",        lat: 25.2048,   lng: 55.2708,   count: 4  },
    { city: "Dharwad",      lat: 15.4589,   lng: 74.9976,   count: 3  },
    { city: "New Delhi",    lat: 28.6139,   lng: 77.2090,   count: 3  },
    { city: "Chennai",      lat: 13.0827,   lng: 80.2707,   count: 3  },
    { city: "Mysuru",       lat: 12.2958,   lng: 76.6394,   count: 2  },
    { city: "Melbourne",    lat: -37.8136,  lng: 144.9631,  count: 2  },
    { city: "Singapore",    lat: 1.3521,    lng: 103.8198,  count: 2  },
    { city: "Abu Dhabi",    lat: 24.4539,   lng: 54.3773,   count: 2  },
    { city: "London",       lat: 51.5074,   lng: -0.1278,   count: 2  },
    { city: "Belagavi",     lat: 15.8497,   lng: 74.4977,   count: 2  },
    { city: "Mangaluru",    lat: 12.9141,   lng: 74.8560,   count: 1  },
    { city: "Toronto",      lat: 43.6532,   lng: -79.3832,  count: 1  },
    { city: "San Jose",     lat: 37.3382,   lng: -121.8863, count: 1  },
    { city: "Kuala Lumpur", lat: 3.1390,    lng: 101.6869,  count: 1  }
  ],

  // Teacher tribute cards
  teachers: [
    {
      name: "Mr. B K Patil",
      subject: "Mathematics",
      photo: null,
      videoUrl: null,
      message: "It brings me immense joy to see all of you coming together after 25 years. You were exceptional students and I know you have made us all proud. Looking forward to seeing your smiling faces again!"
    },
    {
      name: "Mrs. S Kulkarni",
      subject: "English",
      photo: null,
      videoUrl: null,
      message: "25 years! Where did the time go? I still remember your faces in my classroom. This reunion is a wonderful idea and I am honoured to be part of it."
    },
    {
      name: "Mr. R Joshi",
      subject: "Science",
      photo: null,
      videoUrl: null,
      message: "The curiosity and energy you all brought to science class is something I will never forget. So excited to reconnect with all of you!"
    },
    {
      name: "Mrs. P Bhat",
      subject: "Social Studies",
      photo: null,
      videoUrl: null,
      message: "Watching students grow into accomplished individuals is the greatest reward of teaching. See you in April!"
    }
  ],

  // Announcements — add new ones at the TOP of this array (newest first)
  announcements: [
    {
      date: "2026-03-23",
      title: "Sign-up deadline: 31 March",
      text: "The t-shirt cutoff has passed, but you can still register and join us! Sign up before 31 March to confirm your spot. Payment details coming soon."
    },
    {
      date: "2026-03-22",
      title: "T-shirts confirmed!",
      text: "T-shirts have been locked in for everyone who signed up by 23 March. You can still register after the cutoff but may not receive a t-shirt."
    },
    {
      date: "2026-03-20",
      title: "Venue locked in",
      text: "Dennison Hotel in Hubballi is confirmed for both evenings of April 18 and 19. We have the entire banquet hall reserved just for us."
    },
    {
      date: "2026-03-15",
      title: "Teachers are joining us!",
      text: "Several of our beloved teachers have confirmed attendance. Share this page and encourage more classmates to sign up!"
    },
    {
      date: "2026-03-10",
      title: "60+ confirmed and counting",
      text: "We have crossed 60 confirmed attendees! Help us get to 100 by reaching out to anyone still on the fence."
    }
  ]

};
