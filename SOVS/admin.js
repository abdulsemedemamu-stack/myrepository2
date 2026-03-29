const API = "http://localhost:5000";

async function addCandidate() {
  const name = document.getElementById("candidateName").value;

  await fetch(API + "/add-candidate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });

  alert("Candidate Added!");
  loadCandidates();
}

async function loadCandidates() {
  const res = await fetch(API + "/candidates");
  const data = await res.json();

  let html = "";
  data.forEach((c) => {
    html += `<li>${c.name}</li>`;
  });

  document.getElementById("candidateList").innerHTML = html;
}

loadCandidates();
