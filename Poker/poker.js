const suits = ['?', '?', '?', '?'];
const ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const deck = [];

for (let suit of suits) {
  for (let rank of ranks) {
    deck.push({ suit, rank });
  }
}

const hand = [];
for (let i = 0; i < 5; i++) {
  hand.push(deck[Math.floor(Math.random() * deck.length)]);
}

const handDisplay = document.getElementById('hand');
for (let card of hand) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.innerText = card.rank + card.suit;
  handDisplay.appendChild(cardElement);
}

const exchangeButton = document.getElementById('exchangeButton');
exchangeButton.addEventListener('click', function () {
  for (let cardElement of handDisplay.children) {
    if (!cardElement.classList.contains('hold')) {
      cardElement.innerText = deck[Math.floor(Math.random() * deck.length)].rank + card.suit;
    }
  }
  getHandRank(hand);
});

function getHandRank(hand) {
  const resultDisplay = document.getElementById('result');
  resultDisplay.innerText = 'Result: High Card';
}

for (let cardElement of handDisplay.children) {
  cardElement.addEventListener('click', function () {
    cardElement.classList.toggle('hold');
    cardElement.innerText = cardElement.innerText + '\nHold';
  });
}
