let tempData = [];
let labels = [];

const ctx = document.getElementById("tempChart").getContext("2d");

const tempChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [{
      label: "Temperature (°C)",
      data: tempData,
      borderWidth: 2
    }]
  }
});

function updateData() {
  let temperature = (20 + Math.random() * 10).toFixed(1);
  let moisture = (40 + Math.random() * 20).toFixed(1);

  document.getElementById("temp").innerText = temperature + " °C";
  document.getElementById("moisture").innerText = moisture + " %";

  // add data to chart
  if (labels.length > 10) {
    labels.shift();
    tempData.shift();
  }

  labels.push(new Date().toLocaleTimeString());
  tempData.push(temperature);

  tempChart.update();
}

setInterval(updateData, 2000);
