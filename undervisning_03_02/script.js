const page = document.getElementById('app');
let currentPage = 'home';
let number = 0;


function saveNumber(newNumber){
    number = newNumber;
    updateView();
}


function changePage(element){
    currentPage = element;
    updateView()
}


function randomNumber(){
    if(number == 0) return '';
    else return Math.floor(Math.random() * number);
}