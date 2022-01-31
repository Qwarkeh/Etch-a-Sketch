createBoard(6);
reset();

function createRow(width) {
    const container = document.querySelector('div');

    const row = document.createElement('div')
    row.classList.add('row');
    container.appendChild(row);

        for (let i = 0; i < width; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);

            square.addEventListener('mouseover', event => {
                square.style.background = 'black';
            });
        }
};

function createBoard(width) {
    for (let i = 0; i < width; i++) {
        createRow(width);
    };
};

function reset() {
    
    const reset = document.querySelector('#reset');

    reset.addEventListener('click', () => {
        console.log('clicked');

    });
}