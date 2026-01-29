let password = '';
let username = '';

let correctPassword = '123abc';
let correctUsername = 'Rebecka';

let message = '';

updateView();
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
        <div>
            <span>Brukernavn</span>
            <input onchange="saveUsername(this.value)" type="text" placeholder="Skriv inn brukernavn" value=${username}>

            <span>Passord</span>
            <input onchange="savePassword(this.value)" type="password" placeholder="Skriv inn passord" value=${password}> 

            <button onclick="logIn()">Logg inn</button>
            <p>${message}</p>
        </div>
    
    `;
}

function saveUsername(input){
    console.log("username:", input);
    username = input;
}
function savePassword(input){
    console.log("password:", input);
    password = input;
}

function logIn(){
    if(password == correctPassword && username == correctUsername){
        profileView();
    }else if(password != correctPassword || username != correctUsername){
        message = "Passord eller brukernavn er feil.";
        updateView();
    }else{
        message = "Error";
        updateView();
    }
}

function logOut(){
    password = '';
    username = '';
    updateView();
}

function profileView(){
    document.getElementById('app').innerHTML = /*HTML*/`
        <div>
            <h1>Velkommen ${correctUsername}!</h1>
            <button onclick="logOut()">Logg ut</button>
        </div>
    
    `;
}

