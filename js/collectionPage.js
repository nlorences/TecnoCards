validacionInicial();
console.log(cards);
// Muestra la coleccion.
let acumuladorCollection =``;
for( let i = 0; i < cardsCollection.length; i++){
    if( cardsCollection[i] !== 0){
        acumuladorCollection +=
            `<div class="card card-${cards[i].cardNumber}">
                <!-- card name-->
                <h5 class="fw-bolder">${cards[i].cardName}</h5>
                <!-- card image-->
                <img class="card-img-top" src="${cards[i].cardImg}">
                <!-- card number-->
                <h5>Nro. ${cards[i].cardNumber}</h5>
            </div>`;
    } else{
        acumuladorCollection +=
            `<div class="card">
                <div class="card-vacia">
                <h5 class="fw-bolder"> ${cards[i].cardNumber}</h5>
                </div>
            </div>`;
    }
};

$("#collection").html(acumuladorCollection);


/******** TRABAJANDO EN ESTO.
 
 for( let i = 0; i < cardsCollection.length; i++){
     let animacion = $(`.card-${i+1}`);
     
     
     animacion.hover(function(e){
         e.preventDefault();
         animacion.html("hola");
         animacion.animate({
             opacity: .4,
             color: "red",
             
            },
            1500)})
            
        }
        ***************/

