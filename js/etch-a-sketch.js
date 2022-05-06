const NUMBER_OF_ROWS = 16;
const NUMBER_OF_COLS = 16;

function createGrid(parent) {
    for(let row = 0; row < NUMBER_OF_ROWS; row++) {
        const rowView = createRow(gridView);
        for(let col = 0; col < NUMBER_OF_COLS; col++) {
            createBox(rowView);
        }
    }
}

function createRow(parent) {
    let field = document.createElement('div');
    field.classList.add("row");
    parent.appendChild(field);
    return field;
}

function createBox(parent) {
    let field = document.createElement('div');
    field.classList.add("box");
    parent.append(field);
}

const gridView = document.querySelector('.grid');
createGrid();
