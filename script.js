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
    "Makola": 5.50
  },
  "Tudu": {
    "Circle": 2.50,
    "Kaneshie": 3.50,
    "Makola": 1.50
  },
  "Makola": {
    "Circle": 2.00,
    "Kaneshie": 3.00,
    "Tudu": 1.50
  },
  "Lapaz": {
    "Circle": 4.00,
    "Kaneshie": 2.50
  }
};

function calculateFare() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const resultDiv = document.getElementById("result");

  if (!from || !to) { 
    resultDiv.innerHTML = "⚠️ Please select both 'From' and 'To'."; 
    resultDiv.className = "error"; 
    return; 
  }
  if (from === to) { 
    resultDiv.innerHTML = "😂 You're already there!"; 
    resultDiv.className = "error"; 
    return; 
  }
  const fare = fares[`${from}-${to}`];
  if (fare) { 
    resultDiv.innerHTML = `🚐 Fare: <b>GHS ${fare.toFixed(2)}</b>`; 
  resultDiv.className = "success"; 
  } else { 
    resultDiv.innerHTML = "🤔 Route not available yet. More routes coming soon!"; 
    resultDiv.className = "error"; 
  }
}
