validacionInicial();

//Creacion de los Packs en el Document.
let acumuladorPacks =``;
packs.forEach((pack) => {
    acumuladorPacks += `<div class="pack__container" >
    <div class="pack">
        <h3 class="pack__title">Pack ${pack.name}</h3>
        <img class="pack__img" src="${pack.img}" alt="">
        <img class="pack__logo" src="../img/logo.png" alt="">
    </div>
    <button onclick="sellPack(${pack.packId})" class="btnPack">${pack.price} Cr.</button>
</div>`
});
document.getElementById("packs-venta").innerHTML = acumuladorPacks;

$(".pack__img").animate({ 
                    width:"80%"},
                750)
                .delay(50)
                .animate({ 
                    width:"70%"},
                750)