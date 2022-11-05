let color = 'black';
let click = true;

function createGrid(num) {
    const container = document.querySelector('.container');
    let cells = container.querySelectorAll('div');
    cells.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    let amount = num * num;
    for(i = 0; i < amount; i++) {
        cell = document.createElement('div');
        cell.addEventListener('mouseover', colorCell);
        container.appendChild(cell).className = 'cell';
    }
}

createGrid(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        document.querySelector('.error').style.display = "none";
        createGrid(input);
    } else {
        document.querySelector('.error').style.display = "flex";
        console.log("Too many Cells");
    }
}

function colorCell() {
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}

function resetGrid() {
    const container = document.querySelector('.container');
    let cells = container.querySelectorAll('div');
    cells.forEach((div) => div.style.backgroundColor = 'white');    
}

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON') {
        click = !click;
    if (click) {
        document.querySelector('.mode').textContent = "Mode: Coloring";
    } else {
        document.querySelector('.mode').textContent = "Mode: Not Coloring";
    }
    }    
});
