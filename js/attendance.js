function calculateAttendance() {
  const totalInput = document.getElementById("total");
  const attendedInput = document.getElementById("attended");
  const requiredInput = document.getElementById("required");
  const output = document.getElementById("output");

  const total = parseInt(totalInput.value, 10);
  const attended = parseInt(attendedInput.value, 10);
  const required = parseFloat(requiredInput.value);

  if (!(total > 0) || attended < 0 || attended > total || !(required > 0 && required <= 100)) {
    alert("Please enter valid numbers.");
    return;
  }

  const percent = (attended / total) * 100;
  let message = `Current Attendance: ${percent.toFixed(2)}%`;

  if (percent >= required) {
    // max classes you can miss while staying >= required
    const canMiss = Math.floor((attended * 100 / required) - total);
    message += `<br>You can still miss approximately <strong>${canMiss}</strong> classes.`;
  } else {
    // minimum consecutive classes to attend to reach required
    let need = 0;
    while (((attended + need) / (total + need)) * 100 < required) {
      need++;
      if (need > 10000) break;
    }
    message += `<br>You must attend the next <strong>${need}</strong> classes to reach ${required}%.`;
  }

  output.innerHTML = message;
}
