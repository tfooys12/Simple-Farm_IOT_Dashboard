console.log("Dashboard running 🚀");
function updateData() {
  let temperature = (20 + Math.random() * 10).toFixed(1);
  let moisture = (40 + Math.random() * 20).toFixed(1);

  document.getElementById("temp").innerText = temperature + " °C";
  document.getElementById("moisture").innerText = moisture + " %";
}

// update every 2 seconds
setInterval(updateData, 2000);
