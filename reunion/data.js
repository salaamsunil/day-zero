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
    // Replace with the embed URL from Google Maps for Dennison Hotel, Hubballi
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
    confirmed: 77,
    thinking: 61,
    teachers: 0,
    totalInvited: 130
  },

  // STATUS VALUES: "confirmed" | "thinking" | "notcoming"
  // isTeacher: true = shows under Teachers filter tab
  // photo: set to a public image URL to show a photo instead of initials
  // flag: emoji flag for the country they're travelling from
  // NOTE: set location to specific city once known; "India" used as fallback
  attendees: [
    { name: "Vinod Solanki",       location: "Hubballi, IN",       status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Anand Sampat",        location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sneha Torgalmath",    location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Giri Hiremath",       location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sridhar",             location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Shraddha Athani",     location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Megha Pattar",        location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Amit Inamdar",        location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Varsha Deshpande",    location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Darshan Gotadki",     location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Arjun Hebsur",        location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Abhishek Mande",      location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Aparna Limaye",       location: "Sydney, AU",          status: "confirmed", flag: "🇦🇺", photo: null, isTeacher: false },
    { name: "Vijay Math",          location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Vandana Jain",        location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Yogesh Karandikar",   location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Chandan Ijari",       location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ashwini Wali",        location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Vandana Laddar",      location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Suman Kanchan",       location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Raju Rottigowda",     location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sushant Kemptur",     location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Chetana Joshi",       location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Srikkanth",           location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Shilpa Shibargatti",  location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ravi Puranikmath",    location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sagar Tonapi",        location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Vinay Chug",          location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Naina Nadkarni",      location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Mihir Nayak",         location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Vinay Kunchurkar",    location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Vikramaditya J M",    location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sunil Reddy",         location: "Brisbane, AU",        status: "confirmed", flag: "🇦🇺", photo: null, isTeacher: false },
    { name: "Prasanna Hegde",      location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Rashmi Dharamdas",    location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Pavan Kulkarni",      location: "Hubballi, IN",        status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Anand R",             location: "Sydney, AU",          status: "confirmed", flag: "🇦🇺", photo: null, isTeacher: false },
    { name: "Akshay Konnur",       location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Rajiv Dalvi",         location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ashwin Pujari",       location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Chetan Salian",       location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Pramod Makannavar",   location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sachin Khatawkar",    location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Aditya Kulkarni",     location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Hemanth Joshi",       location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Akshay Terdal",       location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Pavan Guledgudda",    location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Kejal Sakaria",       location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Yogini Kamat",        location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Rajani Gad",          location: "Chennai, IN",         status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Swati Patnekar",      location: "Melbourne, AU",       status: "confirmed", flag: "🇦🇺", photo: null, isTeacher: false },
    { name: "Vidya Baddi",         location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Hajira Khazi",        location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Shweta Chatpalli",    location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Avinash Yalagi",      location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sagamesh Madakatti",  location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Vishal Hosalkar",     location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Naina Ankola",        location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Gururaj Kulkarni",    location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Tanmay Patil",        location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Prashant Dani",       location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Vinay Chitlur",       location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sandeep Kulkarni",    location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Praveen Mudigouda",   location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Santosh Kalburgi",    location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Shweta D Kulkarni",   location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Harsha Gourish",      location: "Pune, IN",            status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Umesh Akki",          location: "India",               status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },

    // Still deciding — from class register, not yet confirmed
    { name: "Aditi Hombali",          location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Akshata Shanbag",        location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Almas Nadaf",            location: "India", status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ameetkumar Dalvi",       location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Amruta M Salimath",      location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Anand Bengeri",          location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Anand G Akki",           location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Anand S",                location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Anandkumar R",           location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Anoopkumar Patil",       location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Anup U S",               location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Aparna Barge",           location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Aravind Halyal",         location: "India", status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ashok Kumar Ostwal",     location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ashwin S",               location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ashwini Hiremath",       location: "India", status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ashwini N L",            location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ashwini Patil",          location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Bharath Acharya",        location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Bhargavi S Kotate",      location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Chaitra Deshnur",        location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Chetan Shetty",          location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Chinmayi",               location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Deepa Navale",           location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ganga Desai",            location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Govindaraju R S",        location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Kala",                   location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Kavita Kalyan",          location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Kubra Naaz",             location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Mahendra Apte",          location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Manoj Sangam",           location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Manojkumar Wali",        location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Mudi Gouda Andanigoudar",location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Naveena Thakur",         location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Nayan Baradwad",         location: "India", status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Neetu Oswal",            location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Nitin Bhat",             location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Parmjitkaur Virdi",      location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Pavankumar Bhapkar",     location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Pooja Hanagandi",        location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Priyadarshini Kulkarni", location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Priyanka Tilavalli",     location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Rahul Kulloli",          location: "India", status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Rakesh Kombali",         location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Rakesh Mehta",           location: "India", status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ramyashree B S",         location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Ranjeeta Ilkal",          location: "India", status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sandesh N Shetty",       location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sangeeta Pai",           location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sanjay Kumar Jain",      location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Shilpa Kamatar",         location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Shubha L",               location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Shweta Sullad",          location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sirish D H",             location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sneha Kurtkoti",         location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Snehal Sapkal",          location: "India", status: "confirmed", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sumit Baddi",            location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Supriya Sangodimath",    location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Sweta Patil",            location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Tuljappa Mudhol",        location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Umesh Alur",             location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Urmila R Vemal",         location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Veena Hottimath",        location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Venkatesh Jahagirdar",   location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Vidya Pai",              location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Vinay Revankar",         location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Vinayak Habib",          location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Vishwas P",              location: "India", status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false },
    { name: "Vivekananda Panchangmath",location: "India",status: "thinking", flag: "🇮🇳", photo: null, isTeacher: false }
  ],

  // Travel map markers — isVenue:true marks the destination (Hubballi)
  // Source: Google Forms responses (63 responses; 4 additional confirmed outside form)
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
      title: "77 batchmates confirmed!",
      text: "We have 77 confirmed attendees and the list is growing. Sign up before 16 April to secure your spot!"
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
