// Simplified, but let = mutable variable, const = immutable variable
// Since we are changing count with every function call, we have to make it mutable.
// Best practice is to make every variable immutable by default, so in JS this means using const. 
let count = 0;
// These variables are not allowed to change, so they are immutable.
const add_to_count = [2, 3, 4, 5, 6];
const subtract_to_count = [10, 'J', 'Q', 'K', 'A'];

// Naming: Instead of cc (unclear for other developers possibly working on your project), it's better to use the full naming. 
function card_counting(card) {
    // This is called the ternary operator. It's a shortcut to an if else statement, and is easier to read. 
    add_to_count.includes(card) ? count++ : subtract_to_count.includes(card) ? count-- : null;
    // If you need to use variables or simple expressions within a quote, template literals are best practice, instead of initializing variables before the quote return. 
    return `${count} ${count > 0 ? 'Bet' : 'Hold'}`;
}

card_counting(2); card_counting(3); card_counting(7); card_counting('K'); card_counting('A');