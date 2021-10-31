// 3 rows and 3 columns 

const matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

// 4 rows and 2 columns 

const matrix = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
];

// init = initialize
// i = index

function matrix(number_of_rows, number_of_columns) {
    let matrix = [];
    for (let index = 0; index < number_of_rows; index++) {
        let row = [];
        for (let j = 0; j < number_of_columns; j++) {
            row.push(0);
        }
        matrix.push(row);
    }
    return matrix;
}

let matrix = matrix(3, 3);
console.log(matrix);