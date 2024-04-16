let suit = ['<span class="vibrant">♦</span>','<span class="vibrant">♥</span>','<span class="dark">♠</span>','<span class="dark">♣</span>'];
let cardNo = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

function generateRandomSuit(){
    return suit[Math.floor(Math.random() * suit.length)];
};

function generateRandomCardNo(){
    return cardNo[Math.floor(Math.random() * cardNo.length)];
};

let randomSuit = generateRandomSuit();
let randomCardNo = generateRandomCardNo();

document.querySelector(".card").innerHTML = randomSuit + randomCardNo + randomSuit;

document.querySelector(".newCardButton").addEventListener("click",function() {location.reload();});