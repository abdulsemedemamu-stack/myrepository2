const API = "http://localhost:5000";

async function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  await fetch(API + "/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  alert("✅ Registered successfully!");
}

async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch(API + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem("token", data.token);
    window.location = "vote.html";
  } else {
    alert("❌ Login failed");
  }
}
