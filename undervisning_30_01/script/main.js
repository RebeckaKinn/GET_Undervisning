const page = document.getElementById('app');

let correctPassword = '123abc';
let correctUsername = 'admin';
let password = '';
let username = '';


updateView();
function updateView(){
    page.innerHTML = /*HTML*/`
        <section>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Your username">
            
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Your password">

            <button>Log in</button>
        </section>
    `;
}