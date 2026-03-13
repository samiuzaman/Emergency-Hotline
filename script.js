const cardContainer = document.getElementById("card-container");
cardContainer.addEventListener("click", function (event) {
  // heart count functionality
  if (event.target.classList.contains("heart-btn")) {
    const id = event.target.getAttribute("id");
    const heartCount = document.getElementById("heart-count");
    const totalHeart = parseInt(heartCount.innerText) + 1;
    heartCount.textContent = totalHeart;
    const heartButton = document.getElementById(id);
    heartButton.classList.remove("text-gray-500", "fa-regular", "fa-heart");
    heartButton.classList.add("text-red-500", "fa-solid", "fa-heart");
    console.log(id);
  }

 
});
