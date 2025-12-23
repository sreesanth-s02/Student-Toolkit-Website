function calculateRequiredGpa() {
  const currentCgpa = parseFloat(document.getElementById("currentCgpa").value);
  const completedCredits = parseFloat(document.getElementById("completedCredits").value);
  const nextSemCredits = parseFloat(document.getElementById("nextSemCredits").value);
  const targetCgpa = parseFloat(document.getElementById("targetCgpa").value);
  const out = document.getElementById("targetHelperResult");

  if (!(currentCgpa >= 0) || !(completedCredits > 0) ||
      !(nextSemCredits > 0) || !(targetCgpa > 0)) {
    out.textContent = "Please enter valid CGPA and credit values.";
    return;
  }

  const numerator =
    targetCgpa * (completedCredits + nextSemCredits) -
    currentCgpa * completedCredits;

  const requiredGpa = numerator / nextSemCredits;

  if (requiredGpa > 10) {
    out.textContent =
      `To reach CGPA ${targetCgpa.toFixed(2)}, you would need a semester GPA of ${requiredGpa.toFixed(2)}, ` +
      `which is above the maximum 10. Try a lower target or more semesters.`;
    return;
  }

  if (requiredGpa < 0) {
    out.textContent =
      `Your current CGPA is already above ${targetCgpa.toFixed(2)}. ` +
      `Even a low GPA next semester keeps you over this target.`;
    return;
  }

  const hint = getGradeMixHint(requiredGpa);
  out.textContent = `You need at least a GPA of ${requiredGpa.toFixed(2)} in the next semester ` +
    `to reach an overall CGPA of ${targetCgpa.toFixed(2)}. ` +
    hint;
}
function getGradeMixHint(requiredGpa) {
  if (requiredGpa >= 9.3) {
    return "Aim for almost all O grades, with maybe 1 A+ at most in lower-credit subjects.";
  } else if (requiredGpa >= 9.0) {
    return "Aim for mostly O grades and some A+ grades. Avoid A or lower in high-credit subjects.";
  } else if (requiredGpa >= 8.5) {
    return "Aim for a mix of O and A+ grades, with very few A grades and no B+ or below.";
  } else if (requiredGpa >= 8.0) {
    return "Aim for mostly A+ and A grades, and avoid B+ or lower where possible.";
  } else if (requiredGpa >= 7.0) {
    return "Aim to keep most grades at A or B+, and avoid C or U.";
  } else {
    return "Your target is reachable even with some lower grades, but try to avoid U and too many C grades.";
  }
}

