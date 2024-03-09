"use strict";

let loggedIn = localStorage.getItem("loggedIn");

if (loggedIn) {
  window.location.href = "welcome.html";
}

function storeCredentials(event) {
  event.preventDefault();

  // Retrieve input values
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Store values in localStorage
  localStorage.setItem("firstname", firstName);
  localStorage.setItem("lastname", lastName);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  localStorage.setItem("loggedIn", true);

  // Redirect to welcome page
  window.location.href = "welcome.html";
}
