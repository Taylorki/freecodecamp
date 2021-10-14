// immutable variables outside the scope of your main (card_counting) function are put in capital letters as a general practice.
// the count variable is actually part of the card_counting function, so there's no reason to put it outside the scope of said function.
const ADD_TO_COUNT = [2, 3, 4, 5, 6];
const SUBTRACT_TO_COUNT = [10, 'J', 'Q', 'K', 'A'];

// We also solve the multitude of function calls, by simply accepting an array of cards as the function argument, instead of a single card. 
function card_counting(cards) {
    let count = 0;
    // map goes over every element of the cards array. It's an advanced form of a for loop. Logic stays the same.
    cards.map(card => ADD_TO_COUNT.includes(card) ? count++ : SUBTRACT_TO_COUNT.includes(card) ? count-- : null);
    return `${count} ${count > 0 ? 'Bet' : 'Hold'}`;
}

card_counting([2, 3, 7, 'K', 'A']);