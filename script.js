document.getElementById('calculateBtn').addEventListener('click', function() {
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const resultDiv = document.getElementById('result');
  const swapBtn = document.getElementById("swapBtn");

swapBtn.addEventListener("click", () => {
    const temp = from.value;
    from.value = to.value;
    to.value = temp;
});

  const fares = {
    "Circle": {
      "Kaneshie":   { price: 5.50, time: "20 mins" },
      "Accra Mall": { price: 6.00, time: "25 mins" },
      "Tudu":       { price: 3.50, time: "10 mins" },
      "Makola":     { price: 3.00, time: "8 mins"  },
      "Lapaz":      { price: 4.00, time: "18 mins" }
    },
    "Kaneshie": {
      "Circle":     { price: 5.50, time: "20 mins" },
      "Accra Mall": { price: 5.00, time: "28 mins" },
      "Tudu":       { price: 8.00, time: "15 mins" },
      "Makola":     { price: 6.00, time: "15 mins" },
      "Lapaz":      { price: 3.00, time: "12 mins" }
    },
    "Accra Mall": {
      "Circle":     { price: 6.00, time: "25 mins" },
      "Kaneshie":   { price: 5.00, time: "28 mins" },
      "Tudu":       { price: 8.00, time: "30 mins" },
      "Makola":     { price: 7.00, time: "30 mins" },
      "Lapaz":      { price: 6.00, time: "28 mins" }
    },
    "Tudu": {
      "Circle":     { price: 3.50, time: "10 mins" },
      "Kaneshie":   { price: 8.00, time: "15 mins" },
      "Makola":     { price: 3.00, time: "7 mins"  },
      "Accra Mall": { price: 8.00, time: "30 mins" },
      "Lapaz":      { price: 7.00, time: "25 mins" }
    },
    "Makola": {
      "Circle":     { price: 3.00, time: "8 mins"  },
      "Kaneshie":   { price: 6.00, time: "15 mins" },
      "Tudu":       { price: 3.00, time: "7 mins"  },
      "Accra Mall": { price: 7.00, time: "30 mins" },
      "Lapaz":      { price: 6.00, time: "22 mins" }
    },
    "Lapaz": {
      "Circle":     { price: 4.00, time: "18 mins" },
      "Kaneshie":   { price: 3.00, time: "12 mins" },
      "Tudu":       { price: 7.00, time: "25 mins" },
      "Accra Mall": { price: 6.00, time: "28 mins" },
      "Makola":     { price: 6.00, time: "22 mins" }
    }
  };

  if (from === to) {
    resultDiv.innerHTML = `Please select two different locations.`;
    resultDiv.className = 'error';
    return;
  }

  if (fares[from] && fares[from][to]) {
    const route = fares[from][to];
    resultDiv.innerHTML = `Fare from ${from} to ${to}: <b>GHS ${route.price.toFixed(2)}</b> · ⏱️ Estimated time: <b>${route.time}</b>`;
    resultDiv.className = 'success';
  } else {
    result.innerHTML = `
<h3>Route Unavailable</h3>
<p>This route is currently unavailable.</p>
<p>More routes will be added in future updates.</p>
`;
    resultDiv.className = 'error';
  }
});
