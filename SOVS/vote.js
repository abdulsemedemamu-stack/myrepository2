let chart;

async function getResults() {
  const res = await fetch(API + "/results");
  const data = await res.json();

  const labels = Object.keys(data);
  const values = Object.values(data);

  const ctx = document.getElementById("voteChart");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Votes",
          data: values,
        },
      ],
    },
  });
}
