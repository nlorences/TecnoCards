userName = localStorage.getItem('username');

if(userName) {
    $("#index_content").html(`Bienvenid@ ${userName}
    <div>
    <button class="btn btn-primary" onclick="logOut()">Cerrar sesión</button>
    <button class="btn btn-primary" onclick="reset()">Reiniciar progreso</button>
    </div>`);
    $("#login_info").html(`<div class="small">Hola ${userName}</div>    
    <button class="btnLogOut" onclick="logOut()">Cerrar sesión</button>`);
}

//Validacion del saldo
balance = Number(localStorage.getItem("balance")) || startBalance;
// Validacion de coleccion
cardsCollection = JSON.parse(localStorage.getItem("collection")) || [];

balanceUpdate();


function signIn(){
    userName = $("#user-name").val();
    localStorage.setItem('username', userName);
    $("#index_content").html(`Bienvenid@ ${username}`);
    
}