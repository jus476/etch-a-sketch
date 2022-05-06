const NUMBER_OF_ROWS = 16;

function createGrid(parent) {
    for(let row = 0; row < NUMBER_OF_ROWS; row++) {
        createRow(gridView, (row + 1));
    }
}

function createRow(parent, row_num) {
    let field = document.createElement('div');
    field.classList.add("row");
    field.textContent = `Row ${row_num}`;
    parent.appendChild(field);
}

const gridView = document.querySelector('.grid');
createGrid();
