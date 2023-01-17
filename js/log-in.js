document.getElementById("btn-log-in").addEventListener("click", function () {
  const emailField = document.getElementById("email-field");
  const email = emailField.value;

  const passwordField = document.getElementById("password-field");
  const password = passwordField.value;

  if (email === "xyz@bank.com" && password === "xyz") {
    window.location.href = "bank.html";
  } else {
    alert("Wrong email and password");
  }
  emailField.value = "";
  passwordField.value = "";
});
