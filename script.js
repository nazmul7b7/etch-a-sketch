function createGrid(num) {
    const container = document.querySelector('.container');

    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    let amount = num * num;
    for(i = 0; i < amount; i++) {
        cell = document.createElement('div');
        container.appendChild(cell).className = 'cell';
    }
}

createGrid(16);