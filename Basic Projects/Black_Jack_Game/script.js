// game rule : <21 😊          =21 🥳          >21 😭

let sum =0;
let message="";
let cards =[] //array ===> ordered list of items.
let hasBlackJack = false;
let isAlive= false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// Object 

let player = {
    name:"Per",
    chips:145
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

// 1. Create a function, getRandomCard(), that always return the number 5

function getRandomCard() {
    // if 1    -> return 11

    let random= Math.floor(Math.random() * 13) + 1;
    if(random > 10) {
        return 10
    } else if(random === 1) {
        return 11
    } else {
        return random
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard =getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard+secondCard;
    renderGame();
}
function renderGame() {
    sumEl.textContent = "Sum is: " + sum;
    // render out first and second card
    cardsEl.textContent = "Cards : "
    for(let i = 0 ; i <cards.length; i++) {
        cardsEl.textContent += cards[i] + " " ;
    }
    if(sum < 21) {
        message = "Do you want to draw a new card? 😑"
    } else if(sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack  = true;
    } else {
        message="You're out of the game! 😭";
        isAlive=false;
    }
    messageEl.textContent= message;
}
function newCard() {

    // Only allow the player to get a new card if he is alive and does not have BlackJack

    if(isAlive === true && hasBlackJack === false) {
        let newCrd =getRandomCard();
        sum += newCrd;
        cards.push(newCrd);
        renderGame();
    }
}


