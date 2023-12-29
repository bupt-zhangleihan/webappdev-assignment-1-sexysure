document.getElementById("callApiButton").addEventListener("click", function() {
  // 使用 fetch 或 XMLHttpRequest 调用 API
  fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => {
      document.getElementById("result").textContent = JSON.stringify(data);
    })
    .catch(error => {
      document.getElementById("result").textContent = "Error: " + error.message;
    });
});

  