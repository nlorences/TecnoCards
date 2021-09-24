let baseCartas = [];
let acumuladorApi=``;

let cartas =""

importCards()
function importCards(){
    fetch("../data/marvel.json").then(response =>{
        return response.json();
    }).then(response => {
        cartas = response.data.results;
        console.log(cartas);
        
        
        cartas.forEach((element,index) => {
                baseCartas.push(new Card(index+1,element.name,2021,`${element.thumbnail.path}.${element.thumbnail.extension}`,"",20))
            });

                    
            baseCartas.forEach ((card) => {
            acumuladorApi +=
               `<div class="card card-${card.cardNumber}">
                   <!-- card name-->
                   <h5 class="fw-bolder">${card.cardName}</h5>
                   <!-- card image-->
                   <img class="card-img-top" src="${card.cardImg}">
                   <!-- card number-->
                   <h5>Nro. ${card.cardNumber}</h5>
               </div>`;
               $("#collection").html(acumuladorApi);
            
            
        })

    
    })
}

    
     






// const importCards = async () => {
//         const response = await fetch("../data/marvel.json")
//         const data = await response.json()

//         let i = 0
//         await data.data.results.forEach(element => {
//             baseCards.push(new Card(i+1,element.name,2021,`${element.thumbnail.path}.${element.thumbnail.extension}`,"",20))
//             i++
//         });
        
//         baseCards.forEach (card => {
//            acumuladorApi +=
//                `<div class="card card-${card.cardNumber}">
//                    <!-- card name-->
//                    <h5 class="fw-bolder">${card.cardName}</h5>
//                    <!-- card image-->
//                    <img class="card-img-top" src="${card.cardImg}">
//                    <!-- card number-->
//                    <h5>Nro. ${card.cardNumber}</h5>
//                </div>`;
        
        
//     })
//     $("#collection").html(acumuladorApi);
    
//         console.log(baseCards)
        
// }


// console.log(baseCards)






// async function importCards(){
    
//     const response = await fetch("../data/marvel.json");
//     const data = await response.json();
//     console.log(data)
//     for (let i = 0; i < data.data.results.length; i++){
//         cards.push(new Card(i+1,data.data.results[i].name,2021,`${data.data.results[i].thumbnail.path}.${data.data.results[i].thumbnail.extension}`,"", 10));
        
//     }
//     console.log(cards)
// }

// function importCards(){
    
//     fetch("../data/marvel.json").then(response =>{
//         return response.json();
//     }).then(response => {
//         console.log(response.data.results)
//         for (let i = 0; i < response.data.results.length; i++){
//             cards.push(new Card(i+1,response.data.results[i].name,2021,`${response.data.results[i].thumbnail.path}.${response.data.results[i].thumbnail.extension}`,"", 10));
//         }
//     })
// }
//     console.log(cards)