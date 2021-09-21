// Clase para la creacion de cartas.
class Card{
    constructor(cardNumber, cardName, cardYear, cardImg ="", cardDescription ="", sellPrice){
        this.cardNumber = cardNumber;
        this.cardName = cardName;
        this.cardYear = cardYear;
        this.cardImg = cardImg;
        this.cardDescription = cardDescription;
        this.sellPrice = sellPrice;
    }
}