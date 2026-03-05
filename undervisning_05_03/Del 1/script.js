/*
Tema: Objekter

- Gjøre om oppgaven fra tirsdag til å bruke objekter
- Lage innlogging med brukere


*/
//modell
const app = document.getElementById("app");
const list = [
  {
    task: "Gå tur med hunden",
    isCompleted: false,
    id: 0,
  },
  {
    task: "Male rommet",
    isCompleted: false,
    id: 1,
  },
  {
    task: "Planlegge middag",
    isCompleted: false,
    id: 2,
  },
];
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
  else newList = list.filter((element) => element.task.includes(filterWord));
  console.log(newList);
  for (let i = 0; i < newList.length; i++) {
    if (!newList[i].isCompleted) {
      html += /*HTML*/ `
              <li onclick="completeItem(${newList[i].id})">
                  <span>${newList[i].task}</span>
                  <button>x</button>
              </li>
          `;
    }
  }
  listContainer.innerHTML = html;
}

//controller

function completeItem(chosenId) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === chosenId) {
      list[i].isCompleted = true;
    }
  }

  showListElements();
}

function addItem(newItem) {
  list.push({
    task: newItem,
    isCompleted: false,
    id: Math.floor(Math.random() * 10000),
  });
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
