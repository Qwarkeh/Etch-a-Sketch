createBoard();
reset();

function createRow(startingClass) {
    const container = document.querySelector('div');

    const row = document.createElement('div')
    row.classList.add('row');
    container.appendChild(row);

        for (let i = 0; i < 16; i++) {

            const newClass = startingClass + i;

            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);

            square.addEventListener('mouseover', event => {
                square.style.background = 'black';
            });
        }
};

function createBoard() {
    
    let startModifer = 1;
    for (let i = 0; i < 16; i++) {
        createRow(startModifer);
        startModifer += 16;
    };
};

function reset() {
    const reset= document.querySelector('#reset');
    
    reset.addEventListener('click', () => {
        console.log('clicked');
    })
}