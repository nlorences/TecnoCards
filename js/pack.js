// Clase para la creacion de pack/sobres.
class Pack{
    constructor(packId, packName, cardsQ, price, img) {
        this.packId = packId;
        this.name = packName;
        this.cardsQ = cardsQ;
        this.price = price;
        this.img = img;
    }
    packDetail(){
        alert(`El pack ${this.name} contiene ${this.cardsQ} cartas`);
    }
}


