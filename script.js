function updateData() {
  let temperature = (20 + Math.random() * 10).toFixed(1);
  let moisture = (40 + Math.random() * 20).toFixed(1);

  const tempElement = document.getElementById("temp");
  const moistureElement = document.getElementById("moisture");

  tempElement.innerText = temperature + " °C";
  moistureElement.innerText = moisture + " %";

  // Temperature color logic
  if (temperature > 28) {
    tempElement.style.color = "red";
  } else {
    tempElement.style.color = "green";
  }

  // Moisture color logic
  if (moisture < 45) {
    moistureElement.style.color = "red";
  } else {
    moistureElement.style.color = "blue";
  }
}

setInterval(updateData, 2000);
