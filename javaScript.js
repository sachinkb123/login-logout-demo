"use strict";

function storeCredentials(event) {
  event.preventDefault();

  let Name = document.getElementById("name").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  localStorage.setItem("username", username);
  
  const validPassword = "test123";

  if (username === Name && password === validPassword) {
    localStorage.setItem("loggedIn", true);
    window.location.href = 'welcome.html';
  } else {
    document.getElementById('error').innerHTML = 'Incorrect username or password.';
  }
}

if(window.location.pathname.includes("welcome.html")){

let username = localStorage.getItem("username");

document.write("<h2>Welcome " + username + "!!</h2>");

document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem('username');
      localStorage.removeItem('loggedIn')
      alert("Do you want Logout");
      window.location.href = "index.html";
    });
  }
});
}

checksLoggedIn();

function checksLoggedIn(){
  if(!localStorage.getItem('loggedIn')){
    window.location.href='index.html';
  }
}


