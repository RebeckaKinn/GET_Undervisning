updateView();
function updateView(){
    let html = '';
    
    if(currentPage == "home") html = showHome();
    else if(currentPage == "login") html = showLogin();


    page.innerHTML = html;
}

function showHome(){
    return /*HTML*/`
        <h1>homepage</h1>
        <button onclick="changePage(this.innerHTML)">login</button>
        <input type="number" onchange="saveNumber(this.value)" >
        <p>${randomNumber()}</p>
    `;
}


function showLogin(){
     return /*HTML*/`
        <button onclick="changePage('home')">log in</button>
    `;
}