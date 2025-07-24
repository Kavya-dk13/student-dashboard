// Login credentials
const USERNAME = "student";
const PASSWORD = "1234";

let totalFees = 100000;
let paidFees = 45000;

// Login logic
function login(event) {
  event.preventDefault();
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === USERNAME && p === PASSWORD) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "home.html";
  } else {
    document.getElementById("loginMsg").innerText = "Invalid username or password";
  }
}

// Logout
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

// Auth check
function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    alert("Please login first.");
    window.location.href = "login.html";
  }
}

// Tabs/Sections
function showSection(id) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}

// Fee calculation
function updateRemaining() {
  let remaining = totalFees - paidFees;
  let remElem = document.getElementById("remainingFees");
  if (remElem) remElem.innerText = remaining;
}

function payFees() {
  const amount = parseInt(document.getElementById("payAmount").value);
  if (!isNaN(amount) && amount > 0 && paidFees + amount <= totalFees) {
    paidFees += amount;
    document.getElementById("paidFees").innerText = paidFees;
    updateRemaining();
    alert("Payment successful!");
    document.getElementById("payAmount").value = "";
  } else {
    alert("Invalid or over-limit amount");
  }
}
