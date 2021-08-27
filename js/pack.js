// Clase para la creacion de pack/sobres.
class Pack{
    constructor(packName, cardsQ){
        this.name = packName;
        this.cardsQ = cardsQ;
    }
    packDetail(){
        alert(`El pack ${this.name} contiene ${this.cardsQ} cartas`);
    }
}


