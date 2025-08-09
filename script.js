// main container
const container = document.querySelector("#container");

let isMouseDown = false;
document.addEventListener("mousedown", ()=> isMouseDown = true);
document.addEventListener("mouseup", ()=> isMouseDown = false);

// default box creation
for (i = 0; i < 256; i++){
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    box.style.width = "40px";
    container.appendChild(box);
    box.addEventListener("mousedown", ()=> {box.style.backgroundColor = "rgb(138, 43, 226)";});
    box.addEventListener("mouseover", ()=> {
        if (isMouseDown) {
            box.style.backgroundColor = "rgb(138, 43, 226)";}
        });
};

// resetButton
const resetButton = document.createElement("button");
resetButton.setAttribute("id", "resetButton");
resetButton.textContent = "Reset Grid";

//clearButton
const clearButton = document.createElement("button");
clearButton.setAttribute("class", "clearButton");
clearButton.textContent = "Clear";
clearButton.addEventListener("click", ()=> {box.style.backgroundColor = "white";});

document.body.insertBefore(resetButton, container);
// alternative to above: document.body.firstChild

// resetButton function
    resetButton.addEventListener("click", ()=> {
        numberBoxes = prompt("How many squares per side?");
        container.innerHTML = "";

        if (numberBoxes >= 100){
            numberBoxes = prompt("Sorry, anything over 100 might break the page! Coud you enter another number?");      
        }
    
        const totalBoxes = numberBoxes * numberBoxes;
        const boxWidth = (672 / numberBoxes) - 2;

        for (i = 0; i < totalBoxes; i++){
            const box = document.createElement("div");
            box.setAttribute("class", "box");
            box.style.width = `${boxWidth}px`;
            container.appendChild(box);
            box.addEventListener("mousedown", ()=> {box.style.backgroundColor = "rgb(138, 43, 226)";});
            box.addEventListener("mouseover", ()=> {
                if (isMouseDown) {
                box.style.backgroundColor = "rgb(138, 43, 226)";}
            });
        }
    });


