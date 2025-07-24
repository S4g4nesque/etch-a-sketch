const container = document.querySelector("#container");



for (i = 0; i < 256; i++){
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    box.style.width = "40px";
    container.appendChild(box);
    box.addEventListener("mouseover", ()=> {box.style.backgroundColor = "blueviolet";})

}

const resetButton = document.createElement("button");
resetButton.setAttribute("id", "resetButton");
resetButton.textContent = "Reset Grid";
document.body.insertBefore(resetButton, document.body.firstChild);

// function resetGrid(){
    resetButton.addEventListener("click", ()=> {
        numberBoxes = prompt("How many squares per side?");
        container.innerHTML = "";
        
        const totalBoxes = numberBoxes * numberBoxes;
        const boxWidth = (672 / numberBoxes) - 2;
    
        for (i = 0; i < totalBoxes; i++){
            const box = document.createElement("div");
            box.setAttribute("class", "box");
            box.style.width = `${boxWidth}px`;
            container.appendChild(box);
            box.addEventListener("mouseover", ()=> {box.style.backgroundColor = "blueviolet";})
        }
    });


//create divs boxSize * 2
