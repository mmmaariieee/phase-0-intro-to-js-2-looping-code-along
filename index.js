// Code your solutions in this file
const names = ["Charlie", "Samip", "Ali"];
const events = ["birthday"]

function writeCards(names, events) {
    const cards = []
    for (let num = 0; num < names.length; num++) {
        cards.push(`Thank you, ${names[num]}, for the wonderful ${events} gift!`);
    }
    return cards;
}

function countDown(n) {
    let countup = n;
while (countup >= 0) {
  console.log(countup--);
}
}