// Creacion array packs/sobres
const packs = [];
packs.push(new Pack(0,"Bronce", 3, 300, "../img/moneda_bronce.png"));
packs.push(new Pack(1,"Plata", 4, 380,"../img/moneda_plata.png"));
packs.push(new Pack(2,"Oro", 5, 450,"../img/moneda_oro.png"));

// Creacion array de las cartas
const cards = [];
cards.push(new Card(1,"Carta 1",2021,"../img/mario_bross.png","", 10));
cards.push(new Card(2,"Carta 2",1999,"../img/mario_bross.png","", 50));
cards.push(new Card(3,"Carta 3",1986,"../img/mario_bross.png","", 50));
cards.push(new Card(4,"Carta 4",2021,"../img/mario_bross.png","", 50));
cards.push(new Card(5,"Carta 5",2002,"../img/mario_bross.png","", 90));
cards.push(new Card(6,"Carta 6",2006,"../img/mario_bross.png","", 50));
cards.push(new Card(7,"Carta 7",1977,"../img/mario_bross.png","", 50));
cards.push(new Card(8,"Carta 8",2000,"../img/mario_bross.png","", 150));
cards.push(new Card(9,"Carta 9",2000,"../img/mario_bross.png","", 50));
cards.push(new Card(10,"Carta 10",1994,"../img/mario_bross.png","", 50));

let userName;
// Variable para alcenar saldo y tomarlo del local storage
let balance;
const startBalance = 1500;


/* Array para acumular todas las cartas obtenidas. 
*  Tamaño = cantidad de cartas posibles.
*  cada elemento indica la cantidad de cartas por nro, posicion+1 */
let cardsCollection = [];
const startCollection = () => {
    cardsCollection = new Array(cards.length);
    cardsCollection.fill(0);
    localStorage.setItem("collection", JSON.stringify(cardsCollection));
}

// Array para ultimo sobre abierto.
let sobre = [];

// Validaciones y toma de datos al inicio
function validacionInicial(){
    userName = localStorage.getItem('username') || window.location.replace("../index.html");
    // Mostrar nombre usuario 
    $("#login_info").html(`<div class="small">Hola ${userName}</div>    
    <button class="btnLogOut" onclick="logOut()">Cerrar sesión</button>`);
    balance = Number(localStorage.getItem("balance")) || startBalance;
    cardsCollection = JSON.parse(localStorage.getItem("collection")) || startCollection();
    balanceUpdate();
}

function logOut(){
    localStorage.removeItem("username");
    location.reload();
}
function reset(){
    localStorage.setItem("balance", startBalance);
    localStorage.removeItem("collection");
    location.reload();
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
        <h3 class="fw-bolder">${card.cardName}</h3>
        <img class="card-img-top" src="${card.cardImg}" alt="">
        <h4>Nro. ${card.cardNumber}</h4>
        </div>`
    });
    let cardsSobre =`<div class="cards__container-sobre" > ${acumuladorCardSobre}
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
        // TODO evitar alert
    }
}
const pushToCollection = () => {
    sobre.forEach((card) => {
        cardsCollection[card.cardNumber-1] += 1;
    });
    localStorage.setItem("collection", JSON.stringify(cardsCollection));

}


// Ordenar las cartas segun cardNumber
function ordenarCards(arr){ 
    arr.sort(function(a,b){
        return a.cardNumber - b.cardNumber;
    });
}
