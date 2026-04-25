function callHistory(serviceName, number) {
  const historyContainer = document.getElementById("call-history-container");
  const div = document.createElement("div");
  div.innerHTML = `
        <div
              class="bg-[#f4f1f1] p-3 mt-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <h6 class="font-semibold text-md">${serviceName.innerText}</h6>
                <p class="text-grayColor"> ${number.innerText} </p>
              </div>
              <div>
                <p> ${new Date().toLocaleTimeString("en-BD")} </p>
              </div>
            </div>
  `;
  historyContainer.appendChild(div);
}
