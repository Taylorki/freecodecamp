let x = 9;
let y = 7;

function add_and_multiply_by_2() {
    let sum = x + y;
    console.log("The sum of x and y is ", sum);
    sum_multiplied_by_2 = sum * 200;
    console.log("This sum, multiplied by 2, is ", sum_multiplied_by_2);
    return sum_multiplied_by_2;
}

console.log(add_and_multiply_by_2(x, y));