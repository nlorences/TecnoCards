// Creacion array packs/sobres
const packs = [];
packs.push(new Pack("Bronce", 3));
packs.push(new Pack("Plata", 4));
packs.push(new Pack("Oro", 5));

// Creacion array de las cartas
const cards = [];
cards.push(new Card(1,"Carta 1",2021));
cards.push(new Card(2,"Carta 2",1999));
cards.push(new Card(3,"Carta 3",1986));
cards.push(new Card(4,"Carta 4",2021));
cards.push(new Card(5,"Carta 5",2002));
cards.push(new Card(6,"Carta 6",2006));
cards.push(new Card(7,"Carta 7",1977));
cards.push(new Card(8,"Carta 8",2000));
cards.push(new Card(9,"Carta 9",2000));
cards.push(new Card(10,"Carta 10",1994));

// TODO Array para todas las cartas obtenidas.
let cartasObtenidas = [];

// Array para ultimo sobre abierto.
let sobre = [];

// Funcion para saludo inicial
function welcome(){
    const userName = prompt("Hola!, por favor ingresa tu nombre");
    alert(`Bienvenido ${userName}, selecciona las opciones deseadas`);
}

//Funcion para armar sobres al azar
function randomCards(q){
     let cardsRandom = [];
    for(let i=0; i < q; i++){
        let r = Math.floor(Math.random()*cards.length);
        cardsRandom.push(cards[r]);
        //TODO evitar repetidas
    }
     return cardsRandom;
}

function mostrarCartas() {
    let acumulador =``;
    for(const card of sobre) {
        acumulador += `${card.cardNumber} `;
    }
    alert(`Te tocaron las cartas ${acumulador}`);
}

function ordenarCartasAscendente(){
    cards.sort(function(a,b){
        return a.cardYear - b.cardYear;
    });
    console.log(cards);
    alert("Ver consola 😃");
}

function ordenarCartasDescendente(){
    cards.sort(function(a,b){
        return  b.cardYear - a.cardYear;
    });
    console.log(cards);
    alert("Ver consola 😃");
}

function openPack(q){
    sobre = randomCards(q);
    console.log(sobre);
    mostrarCartas();
    
}
console.log(cards);
welcome();








