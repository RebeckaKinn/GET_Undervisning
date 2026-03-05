const app = document.getElementById("app");

const users = [
  {
    id: 0,
    username: "admin",
    password: "123",
    bio: "hei",
  },
  {
    id: 1,
    username: "Kåre",
    password: "123bc",
    bio: "Jeg heter kåre",
  },
  {
    id: 2,
    username: "Kari",
    password: "jegheterkari",
    bio: "jeg liker poteter",
  },
];
const logInInput = {
  username: "",
  password: "",
};

let message = "";
let loggedInUserIndex = null;
let userId = null;
updateView();
function updateView() {
  app.innerHTML = /*HTML*/ `
    <div>
        <input type="text" onchange="saveUsername(this.value)" placeholder="username"> 
        <input type="text" onchange="savePassword(this.value)" placeholder="password">
        <button onclick="checkLogIn()">Log inn</button>
        <p>${message}</p>
    </div>
    `;
}

function checkLogIn() {
  let match = false;
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].password == logInInput.password &&
      users[i].username == logInInput.username
    ) {
      match = true;
      userId = users[i].id;
    }
  }
  if (match) {
    profile();
  } else {
    message = "wrong login";
    updateView();
  }
}

function profile() {
  const user = users.find((element) => element.id === userId);
  app.innerHTML = /*HTML*/ `
    <h1>Velkommen ${user.username}!</h1>
    `;
}

function saveUsername(name) {
  logInInput.username = name;
}
function savePassword(password) {
  logInInput.password = password;
}

function showInformation() {
  let html = "";
  for (let i = 0; i < users.length; i++) {
    html += /*HTML*/ `
        <div>
            <h3>${users[i].username}</h3>
            <p>${users[i].bio}</p>
        </div>
        `;
  }
  return html;
}
