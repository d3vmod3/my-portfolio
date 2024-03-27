updateAge();
function calculateAge(birthDate) {
  var currentDate = new Date();
  var birthDate = new Date(birthDate);
  var age = currentDate.getFullYear() - birthDate.getFullYear();
  var monthDiff = currentDate.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

// Update age dynamically
function updateAge() {
  var birthDate = "1996-07-11"; // Updated birthdate in "YYYY-MM-DD" format
  var age = calculateAge(birthDate);
  document.getElementById("age").textContent = age;
}
