//view
updateView();
function updateView(){
    let html = '';
    if(currentPage == "login"){
        html = logInView();
    }else if(currentPage == "home"){
        html = homeView();
    }else if(currentPage == "profile"){
        html = profileView();
    }
    
    else{
        html = "noe gikk galt :("
    }

    app.innerHTML = /*HTML*/`
    ${headerComponent()}
    ${html}
    
    `;
}

function logInView(){
    return /*HTML*/ `
        <button onclick="logInHandeling('home')">Log in</button>
    `;
}

function homeView(){
    return /*HTML*/`
    <section>HOMEVIEW</section>
    `;
}

function profileView(){
    return /*HTML*/`
    <section>
        jeg heter kari og liker poteter
    </section>
    `;
}

function headerComponent(){
    if(!isLoggedIn) return '';
    return /*HTML*/`
    <header>
        <button onclick="changePage('profile')">min tinder profil</button>
        <button onclick="changePage('home')">home page</button>
        <button onclick="logInHandeling('login')">log out</button>
    </header>
    `;
}