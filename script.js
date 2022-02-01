createBoard(16);
reset();

function createRow(width) {
    const container = document.querySelector('.container');

    const row = document.createElement('div')
    row.classList.add('row');
    container.appendChild(row);

        for (let i = 0; i < width; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);

            square.addEventListener('mouseover', event => {
                square.style.background = 'white';
            })
        }
}

function createBoard(width) {
    for (let i = 0; i < width; i++) {
        createRow(width);
    }
}

function reset() {
    const reset = document.querySelector('#reset');

    reset.addEventListener('click', () => {
        while (true) {
            let userInput = parseInt(prompt('How many rows do you want to have? (Pick an integer from 1 to 100)'));

            if (isNaN(userInput) === true) {
                return;
            }
            else if (typeof userInput !== 'number' || userInput > 100 || userInput <= 0) {
                alert('Pick a valid integer');
            }    
             else {
                const removeRows = document.querySelectorAll('.row');
                for (i = 0; i < removeRows.length; i++) {
                    removeRows[i].remove();
            }
               return createBoard(userInput);
            }
        } 
    })
}
