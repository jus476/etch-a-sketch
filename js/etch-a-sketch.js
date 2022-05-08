let number_of_rows = 50;
let number_of_cols = 50;
const MAX_PIXELS = 640;

function createGrid(parent) {
    for(let row = 0; row < number_of_rows; row++) {
        const rowView = createRow(gridView);
        for(let col = 0; col < number_of_cols; col++) {
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
    field.style.width = `${MAX_PIXELS/number_of_cols}px`;
    field.style.height = `${MAX_PIXELS/number_of_rows}px`;
    field.classList.add("box");
    parent.append(field);
}

const gridView = document.querySelector('.grid');
createGrid();

const boxItems = document.querySelectorAll('.box');

boxItems.forEach((box) => {
    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = 'black';
    });
})
