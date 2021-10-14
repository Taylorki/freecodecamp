let count = 0;
const add_to_count = [2, 3, 4, 5, 6];
const subtract_to_count = [10, 'J', 'Q', 'K', 'A'];

function cc(card) {
    add_to_count.includes(card) ? count++ : subtract_to_count.includes(card) ? count-- : null;
    return `${count} ${count > 0 ? 'Bet' : 'Hold'}`;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');