let container = document.querySelector('.container');

function colorChange() { //Basic White and Black Color Scheme
    let boxes = document.querySelectorAll('div.box');
    boxes.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            div.style.backgroundColor = 'rgba(0, 0, 0)';
        });
    });    
}


function createGrid(gridNumber) { //Creates new grid to fill container with input of side size
    container.style.gridTemplateColumns = "repeat(" + gridNumber + ", 1fr)";
    container.style.gridTemplateRows = "repeat(" + gridNumber + ", 1fr)";
    let totalBoxes = gridNumber ** 2;
    for (let i = 0; i < totalBoxes; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('box');
        container.appendChild(newDiv);
    }

}


function reset() { //Deletes grid and calls on createGrid to start fresh
    let container = document.querySelector('.container');
    let boxes = document.querySelectorAll('div.box');
    for (let i = (boxes.length-1); i >= 0 ; i--) {
        container.removeChild(container.childNodes[i]);
    }
    let x = prompt("Please enter grid size: ", 16);
    createGrid(x);
}

function generateRandomColor() { //Generates random color which is used in rainbow function
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function rainbow() { //Rainbow color scheme where each mouseover changes the box to a random color
    reset();
    let boxes = document.querySelectorAll('div.box');
    boxes.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            div.style.backgroundColor = generateRandomColor();
        });
    });    

}

function grayscale() { //Each mouseover makes the box 10% darker going from solid white to solid black
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