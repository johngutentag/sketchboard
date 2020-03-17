let container = document.querySelector('.container');

function colorChange() {
    let boxes = document.querySelectorAll('div.box');
    boxes.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            div.style.backgroundColor = 'rgba(0, 0, 0)';
        });
    });    
}

function createGrid(gridNumber) {
    container.style.gridTemplateColumns = "repeat(" + gridNumber + ", 1fr)";
    container.style.gridTemplateRows = "repeat(" + gridNumber + ", 1fr)";
    // document.getElementsByClassName('.container').style.gridTemplateColumns = "repeat(" + gridNumber + ", 1fr)";
    // document.getElementsByClassName('.container').style.gridTemplateRows = "repeat(" + gridNumber + ", 1fr)";
    let totalBoxes = gridNumber ** 2;
    for (let i = 0; i < totalBoxes; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('box');
        container.appendChild(newDiv);
    }

}


function reset() {
    let container = document.querySelector('.container');
    let boxes = document.querySelectorAll('div.box');
    for (let i = (boxes.length-1); i >= 0 ; i--) {
        container.removeChild(container.childNodes[i]);
    }
    let x = prompt("Please enter grid size: ", 16);
    createGrid(x);
}

function generateRandomColor() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function rainbow() {
    reset();
    let boxes = document.querySelectorAll('div.box');
    boxes.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            div.style.backgroundColor = generateRandomColor();
        });
    });    

}

function grayscale() {
    reset();
    let boxes = document.querySelectorAll('div.box');
    boxes.forEach((div) => {
        let transparency = 0.1;;
        div.addEventListener('mouseover', (e) => {
            div.style.backgroundColor = 'rgba(0, 0, 0,'+ transparency + ')';
            transparency += 0.1;
    });  
    });  

};

createGrid(16); 
colorChange();