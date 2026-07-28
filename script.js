document.getElementById('calculateBtn').addEventListener('click', function() {
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const resultDiv = document.getElementById('result');

  const fares = {
    "Circle": { 
      "Kaneshie": 3.00, 
      "Accra Mall": 4.50, 
      "Tudu": 2.50,
      "Makola": 2.00,
      "Lapaz": 4.00
    },
    "Kaneshie": { 
      "Circle": 3.00, 
      "Accra Mall": 5.00, 
      "Tudu": 3.50,
      "Makola": 3.00,
      "Lapaz": 2.50
    },
    "Accra Mall": { 
      "Circle": 4.50, 
      "Kaneshie": 5.00,
      "Tudu": 6.00,
      "Makola": 5.50,
      "Lapaz": 7.00
    },
    "Tudu": {
      "Circle": 2.50,
      "Kaneshie": 3.50,
      "Makola": 1.50,
      "Accra Mall": 6.00,
      "Lapaz": 5.00
    },
    "Makola": {
      "Circle": 2.00,
      "Kaneshie": 3.00,
      "Tudu": 1.50,
      "Accra Mall": 5.50,
      "Lapaz": 4.50
    },
    "Lapaz": {
      "Circle": 4.00,
      "Kaneshie": 2.50,
      "Tudu": 5.00,
      "Accra Mall": 7.00,
      "Makola": 4.50
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
