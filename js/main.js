// Creacion array packs/sobres
const packs = [];
packs.push(new Pack(0,"Bronce", 3, 300, "img/moneda_bronce.png"));
packs.push(new Pack(1,"Plata", 4, 380,"img/moneda_plata.png"));
packs.push(new Pack(2,"Oro", 5, 450,"img/moneda_oro.png"));


// Creacion array de las cartas
const cards = [];
cards.push(new Card(1,"Carta 1",2021,"img/mario_bross.png"));
cards.push(new Card(2,"Carta 2",1999,"img/mario_bross.png"));
cards.push(new Card(3,"Carta 3",1986,"img/mario_bross.png"));
cards.push(new Card(4,"Carta 4",2021,"img/mario_bross.png"));
cards.push(new Card(5,"Carta 5",2002,"img/mario_bross.png"));
cards.push(new Card(6,"Carta 6",2006,"img/mario_bross.png"));
cards.push(new Card(7,"Carta 7",1977,"img/mario_bross.png"));
cards.push(new Card(8,"Carta 8",2000,"img/mario_bross.png"));
cards.push(new Card(9,"Carta 9",2000,"img/mario_bross.png"));
cards.push(new Card(10,"Carta 10",1994,"img/mario_bross.png"));

// Variable para alcenar saldo y tomarlo del local storage
let balance;

// TODO Array para todas las cartas obtenidas.
let cardsCollection = [];

// Array para ultimo sobre abierto.
let sobre = [];

// Funcion para validar saldo al inicio.
function balanceCheck(){
    if(localStorage.getItem("balance") === null){
        balance = 1500;
    } else{
        balance = Number(localStorage.getItem("balance"));
    }
}

// Funcion para mostrar el saldo y guardarlo en localStorage
function balanceUpdate(){
    document.getElementById("balance").innerHTML = `${balance} Cr.`;
    localStorage.setItem("balance", balance);
    
}

//Creacion de los Packs en el Document.
let acumuladorPacks =``;
packs.forEach((pack) => {
    acumuladorPacks += `<div class="pack__container" >
    <div class="pack">
        <h3 class="pack__title">Pack ${pack.name}</h3>
        <img class="pack__img" src="${pack.img}" alt="">
        <img class="pack__logo" src="img/logo.png" alt="">
    </div>
    <button onclick="sellPack(${pack.packId})" class="btnPack">${pack.price} Cr.</button>
</div>`
});
document.getElementById("packs-venta").innerHTML = acumuladorPacks;

//Funcion para armar packs al azar y ordenar por numero.
function randomCards(q){
     let cardsRandom = [];
    for(let i=0; i < q; i++){
        let r = Math.floor(Math.random()*cards.length);
        cardsRandom.push(cards[r]);
        //TODO evitar repetidas
    }
    ordenarCards(cardsRandom);
     return cardsRandom;
}
// Funcion para mostrar el contenido de pack en pantalla
function mostrarCartas() {
    let acumuladorCardSobre = ``;
    sobre.forEach((card) => {
        acumuladorCardSobre += `<div class="card">
        <h3 class="card__title">${card.cardName}</h3>
        <img class="card__img" src="${card.cardImg}" alt="">
        <h4 class="card__number">${card.cardNumber}</h4>
        </div>`
    });
    let cardsSobre =`<div class="card__container" > ${acumuladorCardSobre}
    </div>
    <button class="btnHome"><a class="btnHomeLink" href="index.html">Volver</a></button>`

    document.getElementById("main").setAttribute('class', 'openPack');
    document.getElementById("main").innerHTML = cardsSobre;
}

// Funcion para venta de packs.
function sellPack(packId){
    if(packs[packId].price <= balance){
        balance -= packs[packId].price;
        balanceUpdate();
        sobre = randomCards(packs[packId].cardsQ);
        pushToCollection();
        mostrarCartas();
    } else{
        alert("Saldo insuficiente");
    }
}

balanceCheck();
balanceUpdate();



// Trabajando en esto.


// Funcion para almacenar las cartas en un array de coleccion.
function pushToCollection(){
    cardsCollection = cardsCollection.concat(sobre);
    ordenarCards(cardsCollection);
    console.log(cardsCollection);
}
// Ordenar las cartas de la coleccion segun cardNumber
function ordenarCards(arr){ 
    arr.sort(function(a,b){
        return a.cardNumber - b.cardNumber;
    });
}



// Codigo sin uso actualmente que puede ser de utilidad.

function ordenarCartasDescendente(){
    cards.sort(function(a,b){
        return  b.cardYear - a.cardYear;
    });
    console.log(cards);
    alert("Ver consola 😃");
}



