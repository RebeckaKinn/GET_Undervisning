//model
const page = document.getElementById('app');

let correctPassword = '123abc';
let correctUsername = 'admin';
let password = '';
let username = '';

let message = '';

//view
updateView();
function updateView(){
    page.innerHTML = /*HTML*/`
        <section>
            <label for="username">Username</label>
            <input onchange="saveUsername(this.value)" id="username" type="text" placeholder="Your username" value=${username}>
            
            <label for="password">Password</label>
            <input onchange="savePassword(this.value)" id="password" type="password" placeholder="Your password" value=${password}>

            <button onclick="login()">Log in</button>
            <p>${message}</p>
        </section>
    `;
}

function dashboard(){
    page.innerHTML = /*HTML*/`
        <section>
            <h1>Velkommen ${username}</h1>
            <button onclick="logOut()">Log out</button>
        </section>
    `;
}


//controller
function savePassword(element){
    password = element;
}
function saveUsername(element){
    username = element;
}

function login(){
    if(password == correctPassword && username == correctUsername){
        dashboard();
    }
    else{
        message = "Feil brukernavn eller passord!";
        updateView();
    }
}

function logOut(){
    password = '';
    username = '';
    message = "";
    updateView();
}
