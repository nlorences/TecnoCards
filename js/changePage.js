validacionInicial();

const sellCard = (cardNumber) =>  {
    balance += cards[cardNumber-1].sellPrice;
    balanceUpdate();
    cardsCollection[cardNumber-1] -= 1;
    localStorage.setItem("collection", JSON.stringify(cardsCollection));
    location.reload();


}

let acumuladorChange = ``;
for(let i = 0; i < cardsCollection.length; i++) {
    cardsCollection[i] >= 1 ? acumuladorChange +=
    `<div class="sellCard__container">
        <div class="card">
            <!-- card name-->
            <h5 class="fw-bolder">${cards[i].cardName}</h5>
            <!-- card image-->
            <img class="card-img-top" src="${cards[i].cardImg}">
            <!-- card number-->
            <h5>Nro. ${cards[i].cardNumber}</h5>
        </div>
        <div>   
        <button onclick="sellCard(${cards[i].cardNumber})" class="btnPack">${cards[i].sellPrice} Cr.</button>
        </div>
    </div>` 
    : ``;

}
$("#change").html(acumuladorChange);