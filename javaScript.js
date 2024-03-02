"use strict";

function storeCredentials(event) {
  event.preventDefault();

  // Retrieve input values
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Store values in sessionStorage
  localStorage.setItem("firstname", firstName);
  localStorage.setItem("lastname", lastName);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  // Redirect to welcome page
  window.location.href = "welcome.html";
}
