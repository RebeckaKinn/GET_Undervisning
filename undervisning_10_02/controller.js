//controller
function logInHandeling(newPage){
    isLoggedIn = !isLoggedIn;
    changePage(newPage);
}

function changePage(newPage){
    currentPage = newPage;
    updateView();
}