// Simple CGPA calculator using semester-wise GPA and credits.
// Formula: CGPA = sum(GPA_sem * Credits_sem) / sum(Credits_sem)

function addSemesterRow(initialIndex) {
  const container = document.getElementById("semestersContainer");

  // Determine next semester number
  const existingRows = container.querySelectorAll(".sem-row").length;
  const semNumber = initialIndex || existingRows + 1;

  const row = document.createElement("div");
  row.className = "form-row sem-row";
  row.dataset.sem = semNumber;

  row.innerHTML = `
    <input type="number"
           step="0.01"
           min="0"
           max="10"
           placeholder="GPA for Sem ${semNumber}"
           class="sem-gpa">

    <input type="number"
           step="0.5"
           min="0"
           placeholder="Total Credits for Sem ${semNumber}"
           class="sem-credits">

    <button class="btn outline small" type="button" onclick="removeSemesterRow(this)">
      Remove
    </button>
  `;

  container.appendChild(row);
}

function removeSemesterRow(button) {
  const row = button.closest(".sem-row");
  if (row) {
    row.remove();
  }
}

function calculateCGPAFromGPA() {
  const rows = document.querySelectorAll(".sem-row");
  let totalWeighted = 0;
  let totalCredits = 0;

  rows.forEach(row => {
    const gpaInput = row.querySelector(".sem-gpa");
    const creditsInput = row.querySelector(".sem-credits");

    const gpa = parseFloat(gpaInput.value);
    const credits = parseFloat(creditsInput.value);

    if (gpa > 0 && credits > 0) {
      totalWeighted += gpa * credits;
      totalCredits += credits;
    }
  });

  const resultEl = document.getElementById("cgpaResult");

  if (totalCredits === 0) {
    resultEl.textContent = "Please enter GPA and credits for at least one semester.";
    return;
  }

  const cgpa = totalWeighted / totalCredits;
  resultEl.textContent = `Your CGPA is ${cgpa.toFixed(2)}.`;
}

// Initialize with two rows by default (Sem 1 and 2)
document.addEventListener("DOMContentLoaded", () => {
  addSemesterRow(1);
  addSemesterRow(2);
});
