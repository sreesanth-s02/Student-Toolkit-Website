# Student Toolkit

**Student Toolkit** is a simple, fast, mobile‑friendly web app that bundles multiple utilities for college students, including **GPA / CGPA calculators**, an **attendance tracker**, a **timetable helper**, and a **Target CGPA Planner**.

All tools run completely in the browser using HTML, CSS, and vanilla JavaScript.

---

## Features

- **GPA Calculator (`gpa.html` + `js/gpa.js`)**
  - Department + semester selection (7 mapped departments).
  - Auto‑loaded subjects (code, name, credits) from Anna University Regulation 2021.
  - Manual subject entry for electives or unmapped departments.
  - “Other / Manual department” mode for any syllabus.

- **CGPA Calculator (`cgpa.html` + `js/cgpa.js`)**
  - Add multiple semesters with GPA and credits.
  - Computes overall CGPA using standard weighted formula.

- **Target CGPA Planner (`target.html` + `js/target.js`)**
  - Input current CGPA, completed credits, upcoming credits, and target CGPA.
  - Calculates **required GPA** for the next credits.
  - Shows a short grade‑mix hint (e.g., aim for mostly O / A+).

- **Attendance Tracker (`attendance.html` + `js/attendance.js`)**
  - Track classes attended vs total.
  - Shows current attendance percentage and how many classes you can miss / must attend.

- **Timetable Helper (`timetable.html` + `js/timetable.js`)**
  - Simple interface to plan weekly timetable (days vs periods).

- **Static pages**
  - `index.html` – landing page for Student Toolkit.
  - `about.html` – about the project.
  - `contact.html` – contact / feedback.
  - `privacy-policy.html`, `terms.html` – basic legal/info pages.

---

## Tech Stack

- **Frontend:** HTML5, CSS3, vanilla JavaScript  
- **Assets:** `css/style.css`, images in `img/`  
- **Hosting:** Netlify or Vercel (static site)

No backend or database is required; everything runs on the client.

---


## Project Structure

├── css
│ └── style.css
├── img
│ └── upi-qr.jpeg
├── js
│ ├── attendance.js
│ ├── cgpa.js
│ ├── gpa.js
│ ├── target.js
│ └── timetable.js
├── about.html
├── attendance.html
├── cgpa.html
├── contact.html
├── gpa.html
├── index.html
├── privacy-policy.html
├── target.html
├── terms.html
└── timetable.html
---

## Running Locally

1. Clone the repository:

git clone https://github.com/sreesanth-s02/Student-Toolkit-Website.git
cd Student-Toolkit-Website

2. Open `index.html` directly in your browser **or** run a simple HTTP server:

Python 3: 
python -m http.server 8000

then open http://localhost:8000

## SEO

- Descriptive titles like:  
  - `Student Toolkit – GPA, CGPA & Attendance Tools for Anna University`  
- Per‑page `<meta name="description" ...>` with relevant keywords.  
- Mobile‑friendly responsive design and fast static hosting for good Core Web Vitals.[web:603][web:606]

---

## License

This project is licensed under the **MIT License**.  
See the `LICENSE` file for details.
