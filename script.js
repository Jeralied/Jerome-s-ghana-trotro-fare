const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");

// Swap button — now wired up immediately on page load,
// and swaps the actual <select> elements (not stale string values).
document.getElementById("swapBtn").addEventListener("click", () => {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
});

document.getElementById('calculateBtn').addEventListener('click', function() {
  const from = fromSelect.value;
  const to = toSelect.value;
  const resultDiv = document.getElementById('result');

  const fares = {
    "Circle": {
      "Kaneshie":   { price: 5.00, time: "20 mins" },
      "Accra Mall": { price: 6.00, time: "25 mins" },
      "Tudu":       { price: 5.00, time: "12 mins" },
      "Makola":     { price: 5.00, time: "10 mins" },
      "Lapaz":      { price: 4.00, time: "18 mins" },
      "Madina":     { price: 8.00, time: "30 mins" },
      "Adenta":     { price: 8.00, time: "35 mins" },
      "Tema":       { price: 15.00, time: "60 mins" },
      "East Legon": { price: 8.00, time: "30 mins" },
      "Achimota":   { price: 7.00, time: "20 mins" },
      "Kasoa":      { price: 15.00, time: "50 mins" },
      "Spintex":    { price: 10.00, time: "40 mins" },
      "Ashaiman":   { price: 14.00, time: "55 mins" }
    },
    "Kaneshie": {
      "Circle":     { price: 5.00, time: "20 mins" },
      "Accra Mall": { price: 15.00, time: "70 mins" },
      "Tudu":       { price: 5.00, time: "25 mins" },
      "Makola":     { price: 5.00, time: "25 mins" },
      "Lapaz":      { price: 6.00, time: "25 mins" },
      "Madina":     { price: 10.00, time: "70 mins" },
      "Adenta":     { price: 10.00, time: "75 mins" },
      "Tema":       { price: 20.00, time: "100 mins" },
      "East Legon": { price: 12.00, time: "60 mins" },
      "Achimota":   { price: 10.00, time: "30 mins" },
      "Kasoa":      { price: 15.00, time: "60 mins" },
      "Spintex":    { price: 15.00, time: "65 mins" },
      "Ashaiman":   { price: 20.00, time: "90 mins" }
    },
    "Accra Mall": {
      "Circle":     { price: 6.00, time: "25 mins" },
      "Kaneshie":   { price: 15.00, time: "70 mins" },
      "Tudu":       { price: 8.00, time: "35 mins" },
      "Makola":     { price: 8.00, time: "35 mins" },
      "Lapaz":      { price: 12.00, time: "55 mins" },
      "Madina":     { price: 12.00, time: "60 mins" },
      "Adenta":     { price: 12.00, time: "65 mins" },
      "Tema":       { price: 15.00, time: "50 mins" },
      "East Legon": { price: 7.00, time: "18 mins" },
      "Achimota":   { price: 15.00, time: "50 mins" },
      "Kasoa":      { price: 20.00, time: "100 mins" },
      "Spintex":    { price: 8.00, time: "12 mins" },
      "Ashaiman":   { price: 18.00, time: "55 mins" }
    },
    "Tudu": {
      "Circle":     { price: 5.00, time: "12 mins" },
      "Kaneshie":   { price: 5.00, time: "25 mins" },
      "Makola":     { price: 0.50, time: "5 mins" },
      "Accra Mall": { price: 8.00, time: "35 mins" },
      "Lapaz":      { price: 7.00, time: "30 mins" },
      "Madina":     { price: 10.00, time: "60 mins" },
      "Adenta":     { price: 10.00, time: "65 mins" },
      "Tema":       { price: 15.00, time: "70 mins" },
      "East Legon": { price: 10.00, time: "35 mins" },
      "Achimota":   { price: 8.00, time: "25 mins" },
      "Kasoa":      { price: 12.00, time: "70 mins" },
      "Spintex":    { price: 10.00, time: "40 mins" },
      "Ashaiman":   { price: 14.00, time: "65 mins" }
    },
    "Makola": {
      "Circle":     { price: 5.00, time: "10 mins" },
      "Kaneshie":   { price: 5.00, time: "25 mins" },
      "Tudu":       { price: 0.50, time: "5 mins" },
      "Accra Mall": { price: 8.00, time: "35 mins" },
      "Lapaz":      { price: 7.00, time: "30 mins" },
      "Madina":     { price: 10.00, time: "60 mins" },
      "Adenta":     { price: 10.00, time: "65 mins" },
      "Tema":       { price: 15.00, time: "70 mins" },
      "East Legon": { price: 10.00, time: "35 mins" },
      "Achimota":   { price: 8.00, time: "25 mins" },
      "Kasoa":      { price: 12.00, time: "70 mins" },
      "Spintex":    { price: 10.00, time: "40 mins" },
      "Ashaiman":   { price: 14.00, time: "65 mins" }
    },
    "Lapaz": {
      "Circle":     { price: 4.00, time: "18 mins" },
      "Kaneshie":   { price: 6.00, time: "25 mins" },
      "Tudu":       { price: 7.00, time: "30 mins" },
      "Accra Mall": { price: 12.00, time: "55 mins" },
      "Makola":     { price: 7.00, time: "30 mins" },
      "Madina":     { price: 8.00, time: "30 mins" },
      "Adenta":     { price: 8.00, time: "35 mins" },
      "Tema":       { price: 18.00, time: "85 mins" },
      "East Legon": { price: 12.00, time: "65 mins" },
      "Achimota":   { price: 5.00, time: "12 mins" },
      "Kasoa":      { price: 15.00, time: "70 mins" },
      "Spintex":    { price: 14.00, time: "55 mins" },
      "Ashaiman":   { price: 16.00, time: "80 mins" }
    },
    "Madina": {
      "Circle":     { price: 8.00, time: "30 mins" },
      "Kaneshie":   { price: 10.00, time: "70 mins" },
      "Tudu":       { price: 10.00, time: "60 mins" },
      "Accra Mall": { price: 12.00, time: "65 mins" },
      "Makola":     { price: 10.00, time: "60 mins" },
      "Lapaz":      { price: 8.00, time: "30 mins" },
      "Adenta":     { price: 5.00, time: "12 mins" },
      "Tema":       { price: 17.00, time: "85 mins" },
      "East Legon": { price: 6.00, time: "20 mins" },
      "Achimota":   { price: 7.00, time: "25 mins" },
      "Kasoa":      { price: 15.00, time: "100 mins" },
      "Spintex":    { price: 12.00, time: "65 mins" },
      "Ashaiman":   { price: 16.00, time: "80 mins" }
    },
    "Adenta": {
      "Circle":     { price: 8.00, time: "35 mins" },
      "Kaneshie":   { price: 10.00, time: "75 mins" },
      "Tudu":       { price: 10.00, time: "65 mins" },
      "Accra Mall": { price: 12.00, time: "65 mins" },
      "Makola":     { price: 10.00, time: "65 mins" },
      "Lapaz":      { price: 8.00, time: "35 mins" },
      "Madina":     { price: 5.00, time: "12 mins" },
      "Tema":       { price: 17.00, time: "90 mins" },
      "East Legon": { price: 8.00, time: "25 mins" },
      "Achimota":   { price: 7.00, time: "30 mins" },
      "Kasoa":      { price: 15.00, time: "105 mins" },
      "Spintex":    { price: 12.00, time: "70 mins" },
      "Ashaiman":   { price: 16.00, time: "85 mins" }
    },
    "Tema": {
      "Circle":     { price: 15.00, time: "60 mins" },
      "Kaneshie":   { price: 20.00, time: "100 mins" },
      "Tudu":       { price: 15.00, time: "70 mins" },
      "Accra Mall": { price: 15.00, time: "50 mins" },
      "Makola":     { price: 15.00, time: "70 mins" },
      "Lapaz":      { price: 18.00, time: "85 mins" },
      "Madina":     { price: 17.00, time: "85 mins" },
      "Adenta":     { price: 17.00, time: "90 mins" },
      "East Legon": { price: 16.00, time: "55 mins" },
      "Achimota":   { price: 18.00, time: "75 mins" },
      "Kasoa":      { price: 25.00, time: "120 mins" },
      "Spintex":    { price: 8.00, time: "20 mins" },
      "Ashaiman":   { price: 5.00, time: "15 mins" }
    },
    "East Legon": {
      "Circle":     { price: 8.00, time: "30 mins" },
      "Kaneshie":   { price: 12.00, time: "60 mins" },
      "Tudu":       { price: 10.00, time: "35 mins" },
      "Accra Mall": { price: 7.00, time: "18 mins" },
      "Makola":     { price: 10.00, time: "35 mins" },
      "Lapaz":      { price: 12.00, time: "65 mins" },
      "Madina":     { price: 6.00, time: "20 mins" },
      "Adenta":     { price: 8.00, time: "25 mins" },
      "Tema":       { price: 16.00, time: "55 mins" },
      "Achimota":   { price: 14.00, time: "45 mins" },
      "Kasoa":      { price: 20.00, time: "95 mins" },
      "Spintex":    { price: 10.00, time: "25 mins" },
      "Ashaiman":   { price: 15.00, time: "60 mins" }
    },
    "Achimota": {
      "Circle":     { price: 7.00, time: "20 mins" },
      "Kaneshie":   { price: 10.00, time: "30 mins" },
      "Tudu":       { price: 8.00, time: "25 mins" },
      "Accra Mall": { price: 15.00, time: "50 mins" },
      "Makola":     { price: 8.00, time: "25 mins" },
      "Lapaz":      { price: 5.00, time: "12 mins" },
      "Madina":     { price: 7.00, time: "25 mins" },
      "Adenta":     { price: 7.00, time: "30 mins" },
      "Tema":       { price: 18.00, time: "75 mins" },
      "East Legon": { price: 14.00, time: "45 mins" },
      "Kasoa":      { price: 15.00, time: "60 mins" },
      "Spintex":    { price: 15.00, time: "50 mins" },
      "Ashaiman":   { price: 17.00, time: "70 mins" }
    },
    "Kasoa": {
      "Circle":     { price: 15.00, time: "50 mins" },
      "Kaneshie":   { price: 15.00, time: "60 mins" },
      "Tudu":       { price: 12.00, time: "70 mins" },
      "Accra Mall": { price: 20.00, time: "100 mins" },
      "Makola":     { price: 12.00, time: "70 mins" },
      "Lapaz":      { price: 15.00, time: "70 mins" },
      "Madina":     { price: 15.00, time: "100 mins" },
      "Adenta":     { price: 15.00, time: "105 mins" },
      "Tema":       { price: 25.00, time: "120 mins" },
      "East Legon": { price: 20.00, time: "95 mins" },
      "Achimota":   { price: 15.00, time: "60 mins" },
      "Spintex":    { price: 20.00, time: "80 mins" },
      "Ashaiman":   { price: 22.00, time: "100 mins" }
    },
    "Spintex": {
      "Circle":     { price: 10.00, time: "40 mins" },
      "Kaneshie":   { price: 15.00, time: "65 mins" },
      "Tudu":       { price: 10.00, time: "40 mins" },
      "Accra Mall": { price: 8.00, time: "12 mins" },
      "Makola":     { price: 10.00, time: "40 mins" },
      "Lapaz":      { price: 14.00, time: "55 mins" },
      "Madina":     { price: 12.00, time: "65 mins" },
      "Adenta":     { price: 12.00, time: "70 mins" },
      "Tema":       { price: 8.00, time: "20 mins" },
      "East Legon": { price: 10.00, time: "25 mins" },
      "Achimota":   { price: 15.00, time: "50 mins" },
      "Kasoa":      { price: 20.00, time: "80 mins" },
      "Ashaiman":   { price: 10.00, time: "25 mins" }
    },
    "Ashaiman": {
      "Circle":     { price: 14.00, time: "55 mins" },
      "Kaneshie":   { price: 20.00, time: "90 mins" },
      "Tudu":       { price: 14.00, time: "65 mins" },
      "Accra Mall": { price: 18.00, time: "55 mins" },
      "Makola":     { price: 14.00, time: "65 mins" },
      "Lapaz":      { price: 16.00, time: "80 mins" },
      "Madina":     { price: 16.00, time: "80 mins" },
      "Adenta":     { price: 16.00, time: "85 mins" },
      "Tema":       { price: 5.00, time: "15 mins" },
      "East Legon": { price: 15.00, time: "60 mins" },
      "Achimota":   { price: 17.00, time: "70 mins" },
      "Kasoa":      { price: 22.00, time: "100 mins" },
      "Spintex":    { price: 10.00, time: "25 mins" }
    }
  };

  if (from === to) {
    resultDiv.innerHTML = `Please select two different locations.`;
    resultDiv.className = 'error';
    return;
  }

  if (fares[from] && fares[from][to]) {
    const route = fares[from][to];
    resultDiv.innerHTML = `Estimated Fare from ${from} to ${to}: <b>GHS ${route.price.toFixed(2)}</b> ·      Estimated Travel Time: <b>${route.time}</b>`;
    resultDiv.className = 'success';
  } else {
    resultDiv.innerHTML = `
<h3>Route Unavailable</h3>
<p>This route is currently unavailable.</p>
<p>More routes will be added in future updates.</p>
`;
    resultDiv.className = 'error';
  }
});
