let number_of_rows = 50;
let number_of_cols = 50;
const MAX_PIXELS = 640;
const MIN_GRID_SIZE = 2;
const MAX_GRID_SIZE = 100;

/** 
 *  Creates the etch-a-sketch grid with the dimensions specified by the user.
 *  50x50 us used as the default values.
 *
 * @param {object} parent The element that the grid will be attached to
 * @return {void}
 */
function createGrid(parent) {
    for(let row = 0; row < number_of_rows; row++) {
        const rowView = createRow(gridView);
        for(let col = 0; col < number_of_cols; col++) {
            createBox(rowView);
        }
    }
}

/** 
 *  Creates a row element that the grid boxes will be attached to. 
 *
 * @param {object} parent The element that the row will be attached to
 * @return {object} newly created row element.
 */
function createRow(parent) {
    let field = document.createElement('div');
    field.classList.add("row");
    parent.appendChild(field);
    return field;
}

/** 
 *  Creates a box element that change color when the mouse enters the element.
 *
 * @param {object} parent The element that the box will be attached to
 * @return {void}
 */
function createBox(parent) {
    let field = document.createElement('div');
    field.style.width = `${MAX_PIXELS/number_of_cols}px`;
    field.style.height = `${MAX_PIXELS/number_of_rows}px`;
    field.classList.add("box");
    field.addEventListener('mouseenter', () => {
        field.style.backgroundColor = 'black';
    });
    parent.appendChild(field);
}

/** 
 *  Removes all elements in the grid.
 *
 * @param {void} 
 * @return {void}
 */
function clearGrid() {
    let rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        gridView.removeChild(row);
    });
}

/** 
 *  Prompts the user to enter a new grid size. Bounds and type check the user input.
 *  Forces the gird size the MIN_GRID_SIZE if the user enters an invalid type or a value
 *  too small. Forces the grid size to MAX_GRID_SIZE if the user enters a value too large.
 *
 * @param {void} 
 * @return {void}
 */
function promptForNewGridSize() {
    let value = Number(prompt("Set grid size between 0 and 100:"));
    if((isNaN(value)) ||
       (value < MIN_GRID_SIZE)) {
        value = MIN_GRID_SIZE;
        alert(`Invalid Value Entered.\nMinimum size (${MIN_GRID_SIZE}) will be used.`)
    } else if(value > MAX_GRID_SIZE) {
        value = MAX_GRID_SIZE;
        alert(`Invalid Value Entered.\nMaximum size (${MAX_GRID_SIZE}) will be used.`)
    }
    number_of_rows = value;
    number_of_cols = value;
}

/** 
 *  Clears the grid and redraw the grid using the new grid size. 
 *
 * @param {void} 
 * @return {void}
 */
function redrawGrid() {
    clearGrid();
    createGrid();
}

const gridView = document.querySelector('.grid');
createGrid();

const gridButton = document.querySelector('.grid-size');

gridButton.addEventListener('click', () => {
    promptForNewGridSize();
    redrawGrid();
});
