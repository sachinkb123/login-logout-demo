let firstName = localStorage.getItem("firstname");
let lastName = localStorage.getItem("lastname");

let fullName = firstName + " " + lastName;

document.write("<h2>Welcome " + fullName + "!!</h2>");

document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.clear();
      alert("Do you want Logout");
      window.location.href = "index.html";
    });
  }
});
