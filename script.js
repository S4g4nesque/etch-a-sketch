const container = document.querySelector("#container");



for (i = 0; i < 256; i++){
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    container.appendChild(box);
    box.addEventListener("mouseover", ()=> {box.style.backgroundColor = "blueviolet";})

}

const resetButton = document.createElement("button");
resetButton.setAttribute("id", "resetButton");
resetButton.textContent = "Reset Grid";
document.body.insertBefore(resetButton, document.body.firstChild);
resetButton.addEventListener("click", ()=> width = prompt("How many square wide?"));

