// Anna University GPA logic with syllabus mapping for AI&DS.
// Used ONLY for semester GPA (subject-wise).

const syllabusR2021 = {
  "AIDS": {
    "1": [
      { code: "HS3152", name: "Professional English I", credits: 3 },
      { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
      { code: "PH3151", name: "Engineering Physics", credits: 3 },
      { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
      { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
      { code: "GE3152", name: "தமிழர்மரபு /Heritage of Tamils", credits: 1 },
      { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
      { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
      { code: "GE3172", name: "English Laboratory", credits: 1 }
    ],
    "2": [
      { code: "HS3252", name: "Professional English II", credits: 2 },
      { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4 },
      { code: "PH3256", name: "Physics for Information Science", credits: 3 },
      { code: "BE3251", name: "Basic Electrical and Electronics Engineering", credits: 3 },
      { code: "GE3251", name: "Engineering Graphics", credits: 4 },
      { code: "AD3251", name: "Data Structures Design", credits: 3 },
      { code: "GE3252", name: "தமிழரும் தொழில்நுட்பமும் /Tamils and Technology", credits: 1 },
      { code: "AD3271", name: "Data Structures Design Laboratory", credits: 2 },
      { code: "GE3272", name: "Communications Laboratory", credits: 2 },
      { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2 }
    ],
    "3": [
      { code: "MA3354", name: "Discrete Mathematics", credits: 4 },
      { code: "AD3391", name: "Database Design and Management", credits: 3 },
      { code: "AD3351", name: "Design and Analysis of Algorithms", credits: 4 },
      { code: "AD3301", name: "Data Exploration and Visualization", credits: 4 },
      { code: "AL3391", name: "Artificial Intelligence", credits: 3 },
      { code: "CS3351", name: "Digital Principles and Computer Organization Laboratory", credits: 4 },
      { code: "AD3381", name: "Database Design and Management Laboratory", credits: 3 },
      { code: "AD3311", name: "Artificial Intelligence Laboratory", credits: 3 },
      { code: "GE3361", name: "Professional Development", credits: 2 }
    ],
    "4": [
      { code: "CS3591", name: "Computer Networks", credits: 4 },
      { code: "AL3452", name: "Operating Systems", credits: 4 },
      { code: "CS3471", name: "Probability and Statistics", credits: 4 },
      { code: "AD3491", name: "Fundamentals of Data Science and Analytics", credits: 3 },
      { code: "AL3451", name: "Machine Learning", credits: 3 },
      { code: "AD3461", name: "Machine Learning Laboratory", credits: 2 },
      { code: "GE3451", name: "Environmental Science and Sustainability", credits: 2 },
      { code: "AD3411", name: "Data Science and Analytics Laboratory", credits: 2 }
    ],
    "5": [
      { code: "CCS334", name: "Big Data Analytics", credits: 3 },
      { code: "AD3501", name: "Deep Learning", credits: 3 },
      { code: "CW3551", name: "Data Information and Security", credits: 3 },
      { code: "CS3551", name: "Distributed Computing", credits: 3 },
      { code: "AD3511", name: "Deep Learning Laboratory", credits: 2 },
      { code: "AD3512", name: "Summer Internship", credits: 2 }
    ],
    "6": [
      { code: "CS3691", name: "Embedded Systems and IOT", credits: 4 }
    ],
    "7": [
      { code: "GE3791", name: "Human Values and Ethics", credits: 2 }
    ],
    "8": [
      { code: "AD3811", name: "Project Work/Internship", credits: 10 }
    ]
  },
  "CSE": {
    "1": [
  { code: "HS3151", name: "Professional English - I", credits: 3 },
  { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
  { code: "PH3151", name: "Engineering Physics", credits: 3 },
  { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
  { code: "GE3152", name: "தமிழர்மரபு /Heritage of Tamils", credits: 1 },
  { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
  { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
  { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
  { code: "GE3172", name: "English Laboratory", credits: 1 }
],
  "2": [
  { code: "HS3252", name: "Professional English - II", credits: 2 },
  { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4 },
  { code: "PH3256", name: "Physics for Information Science", credits: 3 },
  { code: "BE3251", name: "Basic Electrical and Electronics Engineering", credits: 3 },
  { code: "GE3251", name: "Engineering Graphics", credits: 4 },
  { code: "CS3251", name: "Programming in C", credits: 3 },
  { code: "GE3252", name: "தமிழரும் தொழில்நுட்பமும் /Tamils and Technology", credits: 1 },
  { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2 },
  { code: "CS3271", name: "Programming in C Laboratory", credits: 2 },
  { code: "GE3272", name: "Communication Laboratory / Foreign Language", credits: 2 }
],
"3": [
  { code: "MA3354", name: "Discrete Mathematics", credits: 4 },
  { code: "CS3351", name: "Digital Principles and Computer Organization", credits: 4 },
  { code: "CS3352", name: "Foundations of Data Science", credits: 3 },
  { code: "CS3301", name: "Data Structures", credits: 3 },
  { code: "CS3391", name: "Object Oriented Programming", credits: 3 },
  { code: "CS3311", name: "Data Structures Laboratory", credits: 1.5 },
  { code: "CS3381", name: "Object Oriented Programming Laboratory", credits: 1.5 },
  { code: "CS3361", name: "Data Science Laboratory", credits: 2 },
  { code: "GE3361", name: "Professional Development", credits: 1 }
],
"4": [
  { code: "CS3452", name: "Theory of Computation", credits: 3 },
  { code: "CS3491", name: "Artificial Intelligence and Machine Learning", credits: 4 },
  { code: "CS3492", name: "Database Management Systems", credits: 3 },
  { code: "CS3401", name: "Algorithms", credits: 4 },
  { code: "CS3451", name: "Introduction to Operating Systems", credits: 3 },
  { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
  { code: "CS3461", name: "Operating Systems Laboratory", credits: 1.5 },
  { code: "CS3481", name: "Database Management Systems Laboratory", credits: 1.5 }
],

"5": [
  { code: "CS3591", name: "Computer Networks", credits: 4 },
  { code: "CS3501", name: "Compiler Design", credits: 4 },
  { code: "CB3491", name: "Cryptography and Cyber Security", credits: 3 },
  { code: "CS3551", name: "Distributed Computing", credits: 3 }
  // Professional Elective I, II and Mandatory Course I are excluded as requested
],
"6": [
  { code: "CCS356", name: "Object Oriented Software Engineering", credits: 4 }, 
  { code: "CS3691", name: "Embedded Systems and IoT", credits: 4 }              
],

"7": [
  { code: "GE3791", name: "Human Values and Ethics", credits: 2 }                
],

"8": [
  { code: "CS3811", name: "Project Work/Internship", credits: 10 }              
]
},
"IT":{
  "1": [
  { code: "HS3152", name: "Professional English - I", credits: 3 },
  { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
  { code: "PH3151", name: "Engineering Physics", credits: 3 },
  { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
  { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
  { code: "GE3152", name: "தமிழர்மரபு / Heritage of Tamils", credits: 1 },
  { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
  { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
  { code: "GE3172", name: "English Laboratory", credits: 1 }
],

"2": [
  { code: "HS3252", name: "Professional English - II", credits: 2 },
  { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4 },
  { code: "PH3256", name: "Physics for Information Science", credits: 3 },
  { code: "BE3251", name: "Basic Electrical and Electronics Engineering", credits: 3 },
  { code: "GE3251", name: "Engineering Graphics", credits: 4 },
  { code: "CS3251", name: "Programming in C", credits: 3 },
  { code: "GE3252", name: "தமிழரும் தொழில்நுட்பமும் / Tamils and Technology", credits: 1 },
  { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2 },
  { code: "CS3271", name: "Programming in C Laboratory", credits: 2 },
  { code: "GE3272", name: "Communication Laboratory / Foreign Language", credits: 2 }

],

"3": [
  { code: "MA3354", name: "Discrete Mathematics", credits: 4 },
  { code: "CS3351", name: "Digital Principles and Computer Organization", credits: 4 },
  { code: "CS3352", name: "Foundations of Data Science", credits: 3 },
  { code: "CD3291", name: "Data Structures and Algorithms", credits: 3 },
  { code: "CS3391", name: "Object Oriented Programming", credits: 3 },
  { code: "CD3281", name: "Data Structures and Algorithms Laboratory", credits: 2 },
  { code: "CS3381", name: "Object Oriented Programming Laboratory", credits: 1.5 },
  { code: "CS3361", name: "Data Science Laboratory", credits: 2 },
  { code: "GE3361", name: "Professional Development", credits: 1 }
],
"4": [
  { code: "CS3452", name: "Theory of Computation", credits: 3 },
  { code: "CS3491", name: "Artificial Intelligence and Machine Learning", credits: 4 },
  { code: "CS3492", name: "Database Management Systems", credits: 3 },
  { code: "IT3401", name: "Web Essentials", credits: 4 },                     // 3-0-2 → 4 credits [web:62]
  { code: "CS3451", name: "Introduction to Operating Systems", credits: 3 },
  { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
  { code: "CS3461", name: "Operating Systems Laboratory", credits: 1.5 },
  { code: "CS3481", name: "Database Management Systems Laboratory", credits: 1.5 }
  // NCC Level 2 excluded as requested
],

"5": [
  { code: "CS3591", name: "Computer Networks", credits: 4 },
  { code: "IT3501", name: "Full Stack Web Development", credits: 3 },          // 3-0-0 → 3 credits [web:54]
  { code: "CS3551", name: "Distributed Computing", credits: 3 },
  { code: "CS3691", name: "Embedded Systems and IoT", credits: 4 },
  { code: "IT3511", name: "Full Stack Web Development Laboratory", credits: 2 }
  // Professional Elective I, II and Mandatory Course I excluded (no fixed code / non-credit)
],

"6": [
  { code: "CCS356", name: "Object Oriented Software Engineering", credits: 4 },
  { code: "IT3681", name: "Mobile Applications Development Laboratory", credits: 1.5 } // 0-0-3 → 1.5 credits [web:64]
  // Open Elective I and Professional Elective III–VI excluded (no single code),
  // Mandatory Course II and NCC Level 3 excluded (non-credit / NCC)
],

"7": [
  { code: "GE3791", name: "Human Values and Ethics", credits: 2 },             // 2-0-0 → 2 credits [web:38]
  { code: "IT3711", name: "Summer Internship", credits: 2 }
],

"8": [
  { code: "IT3811", name: "Project Work/Internship", credits: 10 }
]
},
"ECE":{
  "1": [
  { code: "HS3152", name: "Professional English - I", credits: 3 },
  { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
  { code: "PH3151", name: "Engineering Physics", credits: 3 },
  { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
  { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
  { code: "GE3152", name: "தமிழர்மரபு / Heritage of Tamils", credits: 1 },
  { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
  { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
  { code: "GE3172", name: "English Laboratory", credits: 1 }
],
"2": [
  { code: "HS3252", name: "Professional English - II", credits: 2 },
  { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4 },
  { code: "PH3254", name: "Physics for Electronics Engineering", credits: 3 },
  { code: "BE3254", name: "Electrical and Instrumentation Engineering", credits: 3 },
  { code: "GE3251", name: "Engineering Graphics", credits: 4 },
  { code: "EC3251", name: "Circuit Analysis", credits: 4 },
  { code: "GE3252", name: "தமிழரும் தொழில்நுட்பமும் / Tamils and Technology", credits: 1 },
  { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2 },
  { code: "EC3271", name: "Circuits Analysis Laboratory", credits: 1 },
  { code: "GE3272", name: "Communication Laboratory / Foreign Language", credits: 2 }
  // NCC Credit Course Level 1 excluded
],

"3": [
  { code: "MA3355", name: "Random Processes and Linear Algebra", credits: 4 },
  { code: "CS3353", name: "C Programming and Data Structures", credits: 3 },
  { code: "EC3354", name: "Signals and Systems", credits: 4 },
  { code: "EC3353", name: "Electronic Devices and Circuits", credits: 3 },
  { code: "EC3351", name: "Control Systems", credits: 3 },
  { code: "EC3352", name: "Digital Systems Design", credits: 4 },
  { code: "EC3361", name: "Electronic Devices and Circuits Laboratory", credits: 1.5 },
  { code: "CS3362", name: "C Programming and Data Structures Laboratory", credits: 1.5 },
  { code: "GE3361", name: "Professional Development", credits: 1 }
],

"4": [
  { code: "EC3452", name: "Electromagnetic Fields", credits: 3 },
  { code: "EC3401", name: "Networks and Security", credits: 4 },
  { code: "EC3451", name: "Linear Integrated Circuits", credits: 3 },
  { code: "EC3492", name: "Digital Signal Processing", credits: 4 },
  { code: "EC3491", name: "Communication Systems", credits: 3 },
  { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
  { code: "EC3461", name: "Communication Systems Laboratory", credits: 1.5 },
  { code: "EC3462", name: "Linear Integrated Circuits Laboratory", credits: 1.5 }
  // NCC Credit Course Level 2 excluded
],
"5": [
  { code: "EC3501", name: "Wireless Communication", credits: 4 },
  { code: "EC3552", name: "VLSI and Chip Design", credits: 3 },
  { code: "EC3551", name: "Transmission lines and RF Systems", credits: 3 },
  { code: "EC3561", name: "VLSI Laboratory", credits: 2 }
  // Professional Elective I–III and Mandatory Course I excluded (no fixed code / non‑credit)
],

"6": [
  { code: "ET3491", name: "Embedded Systems and IOT Design", credits: 4 },
  { code: "CS3491", name: "Artificial Intelligence and Machine Learning", credits: 4 }
  // Only core theory subjects included; electives and MC handled manually in your UI
],

"7": [
  { code: "GE3791", name: "Human Values and Ethics", credits: 2 },
  // Elective – Management, Open Elective II–IV excluded (multiple possible codes)
  { code: "EC3711", name: "Summer internship", credits: 2 }
],

"8": [
  { code: "EC3811", name: "Project Work / Internship", credits: 10 }
]
},
"EEE":{
"1": [
      { code: "HS3152", name: "Professional English I", credits: 3 },
      { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
      { code: "PH3151", name: "Engineering Physics", credits: 3 },
      { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
      { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
      { code: "GE3152", name: "தமிழர்மரபு /Heritage of Tamils", credits: 1 },
      { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
      { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
      { code: "GE3172", name: "English Laboratory", credits: 1 }
    ],
  "2": [
  { code: "HS3252", name: "Professional English - II", credits: 2 },
  { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4 },
  { code: "PH3202", name: "Physics for Electrical Engineering", credits: 3 },        // B.Sc, Sem 2 [web:74][web:80]
  { code: "BE3255", name: "Basic Civil and Mechanical Engineering", credits: 3 },
  { code: "GE3251", name: "Engineering Graphics", credits: 4 },
  { code: "EE3251", name: "Electric Circuit Analysis", credits: 4 },                 // PCC, 3-1-0 → 4 credits [web:75][web:84]
  { code: "GE3252", name: "தொழிலும் தொழில்நுட்பமும் / Tamils and Technology", credits: 1 },
  { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2 },
  { code: "EE3271", name: "Electric Circuits Laboratory", credits: 2 },
  { code: "GE3272", name: "Communication Laboratory / Foreign Language", credits: 2 } // 0-0-4 → 2 credits [web:69][web:73]
  // NCC Level 1 excluded
],

"3": [
  { code: "MA3303", name: "Probability and Complex Functions", credits: 4 },
  { code: "EE3301", name: "Electromagnetic Fields", credits: 4 },
  { code: "EE3302", name: "Digital Logic Circuits", credits: 3 },
  { code: "EC3301", name: "Electron Devices and Circuits", credits: 3 },
  { code: "EE3303", name: "Electrical Machines - I", credits: 3 },
  { code: "CS3353", name: "C Programming and Data Structures", credits: 3 },
  { code: "EC3311", name: "Electronic Devices and Circuits Laboratory", credits: 1.5 },
  { code: "EE3311", name: "Electrical Machines Laboratory – I", credits: 1.5 },
  { code: "CS3362", name: "C Programming and Data Structures Laboratory", credits: 1.5 },
  { code: "GE3361", name: "Professional Development", credits: 1 }
],

"4": [
  { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
  { code: "EE3401", name: "Transmission and Distribution", credits: 3 },
  { code: "EE3402", name: "Linear Integrated Circuits", credits: 3 },
  { code: "EE3403", name: "Measurements and Instrumentation", credits: 3 },
  { code: "EE3404", name: "Microprocessor and Microcontroller", credits: 3 },
  { code: "EE3405", name: "Electrical Machines - II", credits: 3 },
  { code: "EE3411", name: "Electrical Machines Laboratory - II", credits: 1.5 },
  { code: "EE3412", name: "Linear and Digital Circuits Laboratory", credits: 1.5 },
  { code: "EE3413", name: "Microprocessor and Microcontroller Laboratory", credits: 1.5 }
  // NCC Level 2 excluded
],
"5": [
  { code: "EE3501", name: "Power System Analysis", credits: 3 },
  { code: "EE3591", name: "Power Electronics", credits: 3 },
  { code: "EE3503", name: "Control Systems", credits: 3 },
  { code: "EE3511", name: "Power Electronics Laboratory", credits: 1.5 },
  { code: "EE3512", name: "Control and Instrumentation Laboratory", credits: 2 }
  // Professional Elective I–III and Mandatory Course I excluded
],

"6": [
  { code: "EE3601", name: "Protection and Switchgear", credits: 3 },
  { code: "EE3602", name: "Power System Operation and Control", credits: 3 },
  { code: "EE3611", name: "Power System Laboratory", credits: 1.5 }
  // Open Elective I, Professional Elective IV–VI, Mandatory Course II, NCC L3 excluded
],

"7": [
  { code: "EE3701", name: "High Voltage Engineering", credits: 3 },
  { code: "GE3791", name: "Human Values and Ethics", credits: 2 }
  // Management Elective, Open Elective II–IV, Professional Elective VII excluded
],

"8": [
  { code: "EE3811", name: "Project Work / Internship", credits: 10 }
]
},
"MECH":{
  "1": [
      { code: "HS3152", name: "Professional English I", credits: 3 },
      { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
      { code: "PH3151", name: "Engineering Physics", credits: 3 },
      { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
      { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
      { code: "GE3152", name: "தமிழர்மரபு /Heritage of Tamils", credits: 1 },
      { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
      { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
      { code: "GE3172", name: "English Laboratory", credits: 1 }
    ],
    "2": [
  { code: "HS3252", name: "Professional English - II", credits: 2 },
  { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4 },
  { code: "PH3251", name: "Materials Science", credits: 3 },
  { code: "BE3251", name: "Basic Electrical and Electronics Engineering", credits: 3 },
  { code: "GE3251", name: "Engineering Graphics", credits: 4 },
  { code: "GE3252", name: "தமிழரும் தொழில்நுட்பமும் / Tamils and Technology", credits: 1 },
  { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2 },
  { code: "BE3271", name: "Basic Electrical and Electronics Engineering Laboratory", credits: 2 },
  { code: "GE3272", name: "Communication Laboratory / Foreign Language", credits: 2 }
  // NCC Level 1 excluded
],

"3": [
  { code: "MA3351", name: "Transforms and Partial Differential Equations", credits: 4 },
  { code: "ME3351", name: "Engineering Mechanics", credits: 3 },
  { code: "ME3391", name: "Engineering Thermodynamics", credits: 3 },
  { code: "CE3391", name: "Fluid Mechanics and Machinery", credits: 4 },
  { code: "ME3392", name: "Engineering Materials and Metallurgy", credits: 3 },
  { code: "ME3393", name: "Manufacturing Processes", credits: 3 },
  { code: "ME3381", name: "Computer Aided Machine Drawing", credits: 2 },
  { code: "ME3382", name: "Manufacturing Technology Laboratory", credits: 2 },
  { code: "GE3361", name: "Professional Development", credits: 1 }
],

"4": [
  { code: "ME3491", name: "Theory of Machines", credits: 3 },
  { code: "ME3451", name: "Thermal Engineering", credits: 4 },
  { code: "ME3492", name: "Hydraulics and Pneumatics", credits: 3 },
  { code: "ME3493", name: "Manufacturing Technology", credits: 3 },
  { code: "CE3491", name: "Strength of Materials", credits: 3 },
  { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
  { code: "CE3481", name: "Strength of Materials and Fluid Machinery Laboratory", credits: 2 },
  { code: "ME3461", name: "Thermal Engineering Laboratory", credits: 2 }
  // NCC Level 2 excluded
],

"5": [
  { code: "ME3591", name: "Design of Machine Elements", credits: 4 },
  { code: "ME3592", name: "Metrology and Measurements", credits: 3 },
  { code: "ME3511", name: "Summer Internship", credits: 1 },
  { code: "ME3581", name: "Metrology and Dynamics Laboratory", credits: 2 }
  // Professional Elective I–III and MC-I excluded
],

"6": [
  { code: "ME3691", name: "Heat and Mass Transfer", credits: 4 },
  { code: "ME3681", name: "CAD/CAM Laboratory", credits: 2 },
  { code: "ME3682", name: "Heat Transfer Laboratory", credits: 2 }
  // Professional Elective IV–VII, Open Elective I, MC-II, NCC L3 excluded
],

"7": [
  { code: "ME3791", name: "Mechatronics and IoT", credits: 3 },
  { code: "ME3792", name: "Computer Integrated Manufacturing", credits: 3 },
  { code: "GE3791", name: "Human Values and Ethics", credits: 2 },
  { code: "GE3792", name: "Industrial Management", credits: 3 },
  { code: "ME3781", name: "Mechatronics and IoT Laboratory", credits: 2 },
  { code: "ME3711", name: "Summer Internship", credits: 1 }
  // Open Elective II–IV excluded
],

"8": [
  { code: "ME3811", name: "Project Work / Internship", credits: 10 }
]
},
"CIVIL":{
  "1": [
      { code: "HS3152", name: "Professional English I", credits: 3 },
      { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
      { code: "PH3151", name: "Engineering Physics", credits: 3 },
      { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
      { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
      { code: "GE3152", name: "தமிழர்மரபு /Heritage of Tamils", credits: 1 },
      { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
      { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
      { code: "GE3172", name: "English Laboratory", credits: 1 }
    ],
    "2": [
  { code: "HS3252", name: "Professional English - II", credits: 2 },
  { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4 },
  { code: "PH3201", name: "Physics for Civil Engineering", credits: 3 },
  { code: "BE3252", name: "Basic Electrical, Electronics and Instrumentation Engineering", credits: 3 },
  { code: "GE3251", name: "Engineering Graphics", credits: 4 },
  { code: "GE3252", name: "தமிழரும் தொழில்நுட்பமும் / Tamils and Technology", credits: 1 },
  { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2 },
  { code: "BE3272", name: "Basic Electrical, Electronics and Instrumentation Engineering Laboratory", credits: 2 },
  { code: "GE3272", name: "Communication Laboratory / Foreign Language", credits: 2 }
  // NCC Level 1 excluded
],

"3": [
  { code: "MA3351", name: "Transforms and Partial Differential Equations", credits: 4 },
  { code: "ME3351", name: "Engineering Mechanics", credits: 3 },
  { code: "CE3301", name: "Fluid Mechanics", credits: 3 },
  { code: "CE3302", name: "Construction Materials and Technology", credits: 3 },
  { code: "CE3303", name: "Water Supply and Wastewater Engineering", credits: 4 },
  { code: "CE3351", name: "Surveying and Levelling", credits: 3 },
  { code: "CE3361", name: "Surveying and Levelling Laboratory", credits: 1.5 },
  { code: "CE3311", name: "Water and Wastewater Analysis Laboratory", credits: 1.5 },
  { code: "GE3361", name: "Professional Development", credits: 1 }
],

"4": [
  { code: "CE3401", name: "Applied Hydraulics Engineering", credits: 4 },
  { code: "CE3402", name: "Strength of Materials", credits: 3 },
  { code: "CE3403", name: "Concrete Technology", credits: 3 },
  { code: "CE3404", name: "Soil Mechanics", credits: 3 },
  { code: "CE3405", name: "Highway and Railway Engineering", credits: 3 },
  { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
  { code: "CE3411", name: "Hydraulic Engineering Laboratory", credits: 1.5 },
  { code: "CE3412", name: "Materials Testing Laboratory", credits: 2 },
  { code: "CE3413", name: "Soil Mechanics Laboratory", credits: 1.5 }
  // NCC Level 2 excluded
],

"5": [
  { code: "CE3501", name: "Design of Reinforced Concrete Structural Elements", credits: 3 },
  { code: "CE3502", name: "Structural Analysis I", credits: 3 },
  { code: "CE3503", name: "Foundation Engineering", credits: 3 },
  { code: "CE3511", name: "Highway Engineering Laboratory", credits: 2 },
  { code: "CE3512", name: "Survey Camp (2 weeks)", credits: 1 }
  // Professional Elective I–III and MC-I excluded
],

"6": [
  { code: "CE3601", name: "Design of Steel Structural Elements", credits: 3 },
  { code: "CE3602", name: "Structural Analysis II", credits: 3 },
  { code: "AG3601", name: "Engineering Geology", credits: 3 },
  { code: "CE3611", name: "Building Drawing and Detailing Laboratory", credits: 2 }
  // Professional Elective IV–VI, Open Elective I, MC-II, NCC L3 excluded
],
"7": [
  { code: "CE3701", name: "Estimation, Costing and Valuation Engineering", credits: 3 },
  { code: "AI3404", name: "Hydrology and Water Resources Engineering", credits: 3 }, // 3-0-0 → 3 credits [web:99][web:101]
  { code: "GE3791", name: "Human Values and Ethics", credits: 2 },                  // 2-0-0 → 2 credits [web:95][web:102]
  { code: "GE3752", name: "Total Quality Management", credits: 3 }                  // 3-0-0 → 3 credits [web:93][web:106]
  // Open Elective II–IV excluded (multiple possible codes)
],

"8": [
  { code: "CE3811", name: "Project Work/Internship", credits: 10 }
],
}
}

let subjects = []; // {code,name,grade,credits}

function getGradePoint(grade) {
  const map = {
    "O": 10,
    "A+": 9,
    "A": 8,
    "B+": 7,
    "B": 6,
    "C": 5,
    "U": 0 // RA / fail
  };
  return map[grade] ?? 0;
}

// Load subjects dropdown when semester/dept change
function loadSubjectsForSemester() {
  const dept = document.getElementById("department").value;
  const sem = document.getElementById("semester").value;
  const select = document.getElementById("subjectSelect");

  // In manual dept, do nothing
  if (dept === "OTHER") {
    select.innerHTML = "";
    const opt = document.createElement("option");
    opt.textContent = "Manual mode: add all subjects below";
    opt.value = "";
    select.appendChild(opt);
    return;
  }

  select.innerHTML = "";

  const list = syllabusR2021[dept]?.[sem] || [];
  if (list.length === 0) {
    const opt = document.createElement("option");
    opt.textContent = "No subjects found for this semester";
    opt.value = "";
    select.appendChild(opt);
    return;
  }

  list.forEach(sub => {
    const opt = document.createElement("option");
    opt.value = sub.code;
    opt.textContent = `${sub.code} – ${sub.name} (${sub.credits} credits)`;
    select.appendChild(opt);
  });
}


// Add subject from mapping
function addSelectedSubject() {
  const dept = document.getElementById("department").value;
  const sem = document.getElementById("semester").value;
  const subCode = document.getElementById("subjectSelect").value;
  const grade = document.getElementById("gradeSelect").value;

  if (dept === "OTHER") {
    alert("For Other / Manual department, please use the custom subject section below.");
    return;
  }

  if (!subCode) {
    alert("Select a subject.");
    return;
  }

  const list = syllabusR2021[dept]?.[sem] || [];
  const selected = list.find(s => s.code === subCode);
  if (!selected) return;

  subjects.push({
    code: selected.code,
    name: selected.name,
    credits: selected.credits,
    grade
  });

  renderSubjects();
}


// Add manual subject (for electives etc.)
function addManualSubject() {
  const name = document.getElementById("manualName").value.trim();
  const credits = parseFloat(document.getElementById("manualCredits").value);
  const grade = document.getElementById("manualGrade").value;

  if (!name || !(credits > 0)) {
    alert("Enter valid custom subject name and credits.");
    return;
  }

  subjects.push({
    code: "-",
    name,
    credits,
    grade
  });

  document.getElementById("manualName").value = "";
  document.getElementById("manualCredits").value = "";
  renderSubjects();
}

function clearSubjects() {
  subjects = [];
  renderSubjects();
}

function removeSubject(index) {
  subjects.splice(index, 1);
  renderSubjects();
}

function renderSubjects() {
  const tbody = document.querySelector("#subjectTable tbody");
  tbody.innerHTML = "";

  subjects.forEach((s, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${s.code}</td>
      <td>${s.name}</td>
      <td>${s.grade}</td>
      <td>${s.credits}</td>
      <td><button onclick="removeSubject(${i})">X</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function calculateGPA() {
  if (subjects.length === 0) {
    alert("Please add at least one subject.");
    return;
  }

  let totalCredits = 0;
  let weightedSum = 0;

  subjects.forEach(s => {
    totalCredits += s.credits;
    weightedSum += getGradePoint(s.grade) * s.credits;
  });

  if (totalCredits === 0) {
    alert("Total credits is zero. Check subject data.");
    return;
  }

  const value = weightedSum / totalCredits;
  const rounded = value.toFixed(2);

  const out = document.getElementById("cgpaResult"); // or gpaResult if you rename
  out.textContent = `Your GPA for this semester is ${rounded}.`;
}

function onDepartmentChange() {
  const dept = document.getElementById("department").value;
  const semesterSelect = document.getElementById("semester");

  // Reset semester to default (e.g., placeholder)
  semesterSelect.value = "";
  subjects = [];
  renderSubjects();

  const select = document.getElementById("subjectSelect");

  if (dept === "OTHER") {
    select.innerHTML = "";
    const opt = document.createElement("option");
    opt.textContent = "Manual mode: add all subjects below";
    opt.value = "";
    select.appendChild(opt);
  } else {
    // Wait for user to choose semester; do not load subjects yet
    select.innerHTML = "";
    const opt = document.createElement("option");
    opt.textContent = "Select semester first";
    opt.value = "";
    select.appendChild(opt);
  }
}



// initialise dropdown on page load
document.addEventListener("DOMContentLoaded", () => {
  loadSubjectsForSemester();
});

