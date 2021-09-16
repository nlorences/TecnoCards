// Creacion array packs/sobres
const packs = [];
packs.push(new Pack(0,"Bronce", 3, 300, "../img/moneda_bronce.png"));
packs.push(new Pack(1,"Plata", 4, 380,"../img/moneda_plata.png"));
packs.push(new Pack(2,"Oro", 5, 450,"../img/moneda_oro.png"));

// Creacion array de las cartas
const cards = [];
cards.push(new Card(1,"Carta 1",2021,"../img/mario_bross.png"));
cards.push(new Card(2,"Carta 2",1999,"../img/mario_bross.png"));
cards.push(new Card(3,"Carta 3",1986,"../img/mario_bross.png"));
cards.push(new Card(4,"Carta 4",2021,"../img/mario_bross.png"));
cards.push(new Card(5,"Carta 5",2002,"../img/mario_bross.png"));
cards.push(new Card(6,"Carta 6",2006,"../img/mario_bross.png"));
cards.push(new Card(7,"Carta 7",1977,"../img/mario_bross.png"));
cards.push(new Card(8,"Carta 8",2000,"../img/mario_bross.png"));
cards.push(new Card(9,"Carta 9",2000,"../img/mario_bross.png"));
cards.push(new Card(10,"Carta 10",1994,"../img/mario_bross.png"));

let userName;
// Variable para alcenar saldo y tomarlo del local storage
let balance;
let startBalance = 1500;

// Array para todas las cartas obtenidas. (guarda solo los nro de carta)
let cardsCollection = [];

// Array para ultimo sobre abierto.
let sobre = [];

// Validaciones y toma de datos al inicio
function validacionInicial(){
    userName = localStorage.getItem('username') || window.location.replace("../index.html");
    // Mostrar nombre usuario 
    $("#login_info").html(`<div class="small">Hola ${userName}</div>    
    <button class="btnLogOut" onclick="logOut()">Cerrar sesión</button>`);
    balance = Number(localStorage.getItem("balance")) || startBalance;
    cardsCollection = JSON.parse(localStorage.getItem("collection")) || [];
    balanceUpdate();
}

function logOut(){
    localStorage.removeItem("username");
    window.location.replace("../index.html");
}
function reset(){
    localStorage.setItem("balance", startBalance);
    localStorage.removeItem("collection");
    window.location.replace("../index.html");
}
// Funcion para mostrar el saldo y guardarlo en localStorage
function balanceUpdate(){
    document.getElementById("balance").innerHTML = `${balance} Cr.`;
    localStorage.setItem("balance", balance); 
}

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
    <button class="btnHome"><a class="btnHomeLink" href="packs.html">Volver</a></button>`

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

// Funcion para almacenar las cartas en un array de coleccion y almacenar en local storage
function pushToCollection(){
    sobre.forEach((card) => {
        cardsCollection.push(card.cardNumber);
    });
    localStorage.setItem("collection", JSON.stringify(cardsCollection));
    ordenarCards(cardsCollection);
}
// Ordenar las cartas segun cardNumber
function ordenarCards(arr){ 
    arr.sort(function(a,b){
        return a.cardNumber - b.cardNumber;
    });
}
// Array y funcion para armar la coleccion.
let album = new Array(cards.length);
function armarColeccion() {
    album.fill(0);
    for (let i = 0; i < album.length; i++){
        for (let j = 0; j < cardsCollection.length; j++) {
            if (i+1 == cardsCollection[j]) {
              album[i] = album[i] + 1;
            }
          }
    }
}
