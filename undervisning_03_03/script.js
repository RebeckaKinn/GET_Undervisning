/*
Tema: Loops og Arrays

To-Do-app

- MVC
- Et array med oppgaver, kan legge til flere elementer. 
- Trykke på dem for å fjerne. 
- Søke etter oppgave (filtrere) - som dynamisk kommer opp per bokstav. 

- .includes / .filter


*/
//modell
const app = document.getElementById("app");
const list = ["Gå tur med hunden", "Male rommet", "Planlegge middag"];
let filterWord = "";

//view
updateView();
const listContainer = document.getElementById("listContainer");
showListElements();
function updateView() {
  app.innerHTML = /*HTML*/ `
        <div>
            <input onchange="addItem(this.value)" type="text" placeholder="Legg til oppgave">
            <input oninput="addFilterWord(this.value)" value="${filterWord}" autofocus type="text" placeholder="Filtrere oppgaver">
            <ul id="listContainer"></ul>
        </div>
    `;
}

function showListElements() {
  let html = "";
  let newList;
  if (!filterWord) newList = list;
  else newList = list.filter((element) => element.includes(filterWord));
  for (let i = 0; i < newList.length; i++) {
    html += /*HTML*/ `
            <li onclick="removeItem(${i})">
                <span>${newList[i]}</span>
                <button>x</button>
            </li>
        `;
  }
  listContainer.innerHTML = html;
}

//controller

function addItem(newItem) {
  list.push(newItem);
  showListElements();
}

function removeItem(index) {
  list.splice(index, 1);
  showListElements();
}

function addFilterWord(word) {
  filterWord = word;
  showListElements();
}

//function showFilteredElements() {
//   let html = "";
//   if (!filterWord) return "";
//   for (let i = 0; i < list.length; i++) {
//     if (list[i].includes(filterWord)) {
//       html += /*HTML*/ `
//             <li onclick="removeItem(${i})">
//                 <span>${list[i]}</span>
//                 <button>x</button>
//             </li>
//         `;
//     }
//   }
//   return html;
// }
