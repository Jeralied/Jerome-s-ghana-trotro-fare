document.getElementById('calculateBtn').addEventListener('click', function() {
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const resultDiv = document.getElementById('result');

  const fares = {
    "Circle": { 
      "Kaneshie": 5.50, 
      "Accra Mall": 6.00, 
      "Tudu": 3.50,
      "Makola": 3.00,
      "Lapaz": 4.00
    },
    "Kaneshie": { 
      "Circle": 5.50, 
      "Accra Mall": 5.00, 
      "Tudu": 8.00,
      "Makola": 6.00,
      "Lapaz": 3.00
    },
    "Accra Mall": { 
      "Circle": 6.00, 
      "Kaneshie": 5.00,
      "Tudu": 8.00,
      "Makola": 7.00,
      "Lapaz": 6.00
    },
    "Tudu": {
      "Circle": 3.50,
      "Kaneshie": 8.00,
      "Makola": 3.00,
      "Accra Mall": 8.00,
      "Lapaz": 7.00
    },
    "Makola": {
      "Circle": 3.00,
      "Kaneshie": 6.00,
      "Tudu": 3.00,
      "Accra Mall": 7.00,
      "Lapaz": 6.00
    },
    "Lapaz": {
      "Circle": 4.00,
      "Kaneshie": 3.00,
      "Tudu": 7.00,
      "Accra Mall": 6.00,
      "Makola": 6.00
    }
  };

  if (from === to) {
    resultDiv.innerHTML = `🤔 You can't travel from ${from} to ${from}`;
    resultDiv.className = 'error';
    return;
  }

  if (fares[from] && fares[from][to]) {
    const fare = fares[from][to].toFixed(2);
    resultDiv.innerHTML = `✅ Fare from ${from} to ${to}: <b>GHS ${fare}</b>`;
    resultDiv.className = 'success';
  } else {
    resultDiv.innerHTML = `😅 Route not available yet. More routes coming soon!`;
    resultDiv.className = 'error';
  }
});
