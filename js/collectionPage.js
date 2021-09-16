validacionInicial();
armarColeccion();

// Muestra la coleccion.
let acumuladorCollection =``;
for( let i = 0; i < album.length; i++){
    if( album[i] !== 0){
        acumuladorCollection += 
        `<div class="col mb-5">
            <div class="card h-100">
                <!-- card image-->
                <img class="card-img-top" src="${cards[i].cardImg}">
                <!-- card details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- card name-->
                        <h5 class="fw-bolder">${cards[i].cardName}</h5>
                    </div>
                </div>
                <div class="card-body">
                    <div class="text-center">
                        <!-- card number-->
                        <h5 class="fw-bolder">${cards[i].cardNumber}</h5>
                    </div>
                </div>
            </div>
        </div>`;
    } else{
        acumuladorCollection += 
            `<div class="col mb-5">
                <div class="card h-100">
                    <div class="card-vacia">
                    <h5 class="fw-bolder text-center"> ${cards[i].cardNumber} </h5>
                    </div>
                </div>
            </div>`;
    }
};

$("#collection").html(acumuladorCollection);