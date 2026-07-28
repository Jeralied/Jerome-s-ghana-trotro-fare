const fares = {
  "circle-kaneshie": 3.00, "kaneshie-circle": 3.00,
  "circle-accra-mall": 4.50, "accra-mall-circle": 4.50,
  "kaneshie-accra-mall": 5.00, "accra-mall-kaneshie": 5.00
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
