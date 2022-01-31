const container = document.querySelector('div');

function createRow(startingClass) {
    const row = document.createElement('div')
    row.classList.add('row');
    container.appendChild(row);

        
        for (let i = 0; i < 16; i++) {

            const newClass = startingClass + i;

            const square = document.createElement('button');
            square.classList.add(`btn${newClass}`);
            square.style.height = '30px';
            square.style.width = '30px';
            square.textContent = `${newClass}`
            row.appendChild(square);
            }
};

function createBoard() {
    
    let startModifer = 1;
    for (let i = 0; i < 16; i++) {
        createRow(startModifer);
        startModifer += 16;
    }



};

createBoard();