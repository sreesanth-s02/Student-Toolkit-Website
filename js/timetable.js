function generateTimetable() {
  const subjectsInput = document.getElementById("subjects").value;
  const weakInput = document.getElementById("weakSubjects").value;
  const days = parseInt(document.getElementById("days").value, 10);
  const hoursPerDay = parseFloat(document.getElementById("hours").value);
  const outputDiv = document.getElementById("timetable");

  const subjects = subjectsInput
    .split(",")
    .map(s => s.trim())
    .filter(s => s.length > 0);

  const weakSubjects = weakInput
    .split(",")
    .map(s => s.trim())
    .filter(s => s.length > 0);

  if (subjects.length === 0 || !(days > 0) || !(hoursPerDay > 0)) {
    alert("Enter subjects, days, and daily hours.");
    return;
  }

  const totalStudyHours = days * hoursPerDay;

  // Assign weights: 2 for weak, 1 for normal
  const subjectInfo = subjects.map(name => ({
    name,
    weight: weakSubjects.includes(name) ? 2 : 1
  }));

  const totalWeight = subjectInfo.reduce((sum, s) => sum + s.weight, 0);

  // Hours for each subject
  subjectInfo.forEach(s => {
    s.totalHours = (s.weight / totalWeight) * totalStudyHours;
  });

  // Build schedule days
  const schedule = [];
  for (let i = 0; i < days; i++) {
    schedule.push({
      day: i + 1,
      remaining: hoursPerDay,
      slots: []
    });
  }

  // Distribute hours in 1 or 2 hour blocks
  const maxBlock = 2;
  let dayIndex = 0;

  subjectInfo.forEach(subject => {
    let remaining = subject.totalHours;

    while (remaining > 0.25) { // ignore very tiny remainders
      const currentDay = schedule[dayIndex];

      if (currentDay.remaining <= 0.25) {
        dayIndex = (dayIndex + 1) % days;
        continue;
      }

      const block = Math.min(maxBlock, remaining, currentDay.remaining);
      currentDay.slots.push({ name: subject.name, hours: block });
      currentDay.remaining -= block;
      remaining -= block;

      dayIndex = (dayIndex + 1) % days;
    }
  });

  // Render schedule
  let html = "";
  schedule.forEach(day => {
    html += `<div class="day-block"><h3>Day ${day.day}</h3>`;
    if (day.slots.length === 0) {
      html += `<p class="muted">Free / buffer day</p>`;
    } else {
      html += "<ul>";
      day.slots.forEach(slot => {
        html += `<li>${slot.name} – ${slot.hours.toFixed(1)} hr(s)</li>`;
      });
      html += "</ul>";
    }
    html += "</div>";
  });

  outputDiv.innerHTML = html;
}
