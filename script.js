createBoard();
reset();

function createRow(width) {
    const container = document.querySelector('div');

    const row = document.createElement('div')
    row.classList.add('row');
    container.appendChild(row);

        //TODO: set up to take width
        for (let i = 0; i < 16; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);

            square.addEventListener('mouseover', event => {
                square.style.background = 'black';
            });
        }
};

//TODO: set up to take width
function createBoard() {
    for (let i = 0; i < 16; i++) {
        createRow();
    };
};

function reset() {
    const reset= document.querySelector('#reset');
    
    reset.addEventListener('click', () => {
        console.log('clicked');
    })
}