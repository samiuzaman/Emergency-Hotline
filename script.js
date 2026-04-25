const cardContainer = document.getElementById("card-container");
cardContainer.addEventListener("click", function (event) {
  // heart count functionality
  if (event.target.classList.contains("heart-btn")) {
    const heartCount = document.getElementById("heart-count");
    const totalHeart = parseInt(heartCount.innerText) + 1;
    heartCount.textContent = totalHeart;
    const heartButton = event.target;
    heartButton.classList.remove("text-gray-500", "fa-regular", "fa-heart");
    heartButton.classList.add("text-red-500", "fa-solid", "fa-heart");
  }

  // Call Button Functionality
  if (event.target.classList.contains("call-btn")) {
    const heartCount = document.getElementById("heart-count");
    if (parseInt(heartCount.innerText) >= 20) {
      // Show an alert with a message including the service name and number
      const card = event.target.parentElement.parentElement;
      const service = card.querySelector("#heading");
      const number = card.querySelector("#call");
      confirm(`Service: ${service.innerText};  Call: ${number.innerText}`);
      const currentConi = parseInt(heartCount.innerText) - 20;
      heartCount.textContent = currentConi;

      // Display Call History
      callHistory(service, number);
    } else {
      alert("Your coins are less than 20. Recharge coins.");
    }
  }

  // Copy Button Functionality
  if (event.target.classList.contains("copy-btn")) {
    const container = event.target.parentElement.parentElement;
    const callEl = container.querySelector("#call").innerText;
    window.navigator.clipboard.writeText(callEl);
    const copyCount = document.getElementById("copy-count");
    copyCount.innerText = parseInt(copyCount.innerText) + 1;
    alert("Copied successfully!");
  }
});

// History Clear Button Functionality
document.getElementById("clear-btn").addEventListener("click", function () {
  const historyContainer = document.getElementById("call-history-container");
  historyContainer.innerText = "";
});
