let color = 'black';

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

function changeSize(input) {
    if (input >= 2 || input <= 100) {
        createGrid(input);
    } else console.log("Too many Cells")
}

function colorCell() {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}