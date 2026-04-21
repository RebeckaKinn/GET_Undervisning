/*
Mer om objekter! :D 
- Lage starten av et prosjekt med bruk av modell-objekt (Emne 2 måten)
- Lage en updateView-navigasjon med bruk av modellen
- Login med bruk av modellen

- Lagre id til den som er logget inn i modellen
- .find / loop til å finne hvem som er logget inn
- CreateUser 
*/

updateView();
function updateView() {
  let html = "";
  if (model.app.currentPage == "login") html = logInView();
  else if (model.app.currentPage == "profile") html = profileView();
  else if (model.app.currentPage == "createNewUser") html = createNewuser();
  model.app.app.innerHTML = /*HTML*/ `
  <main>${html}</main>
  `;
}

function logInView() {
  return /*HTML*/ `
        <div>
            <input type="text" placeholder="username" onchange="saveUsername(this.value)">
            <input type="text" placeholder="password" onchange="savePassword(this.value)">
            <button onclick="logInController()">Log In</button>
        </div>
    `;
}

function profileView() {
  const user =
    model.data.users.find((element) => element.id == model.app.loggedInId) ||
    null;
  if (user == null) return "404";
  return /*HTML*/ `
    <h1>Velkommen ${user.firstName} ${user.lastName}</h1>
    `;
}

function createNewuser() {
  return /*HTML*/ `
    <div class="flex">
        <input type="text" placeholder="First Name" onchange="model.viewState.newUser.firstName = this.value">
        <input type="text" placeholder="Last Name" onchange="model.viewState.newUser.lastName = this.value">
        <br>
        <input type="text" placeholder="Username" onchange="model.viewState.newUser.username = this.value">
        <br>
        <input type="text" placeholder="Password" onchange="model.viewState.newUser.password = this.value">
        <input type="text" placeholder="Repeat Password">
        <br>
        <button onclick="createNewUser()">Create User</button>
    </div>
    `;
}
