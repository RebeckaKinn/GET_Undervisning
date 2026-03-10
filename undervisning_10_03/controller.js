function saveUsername(username) {
  model.viewState.logIn.username = username;
}
function savePassword(password) {
  model.viewState.logIn.password = password;
}

function logInController() {
  let login = model.viewState.logIn;
  for (let i = 0; i < model.data.users.length; i++) {
    let user = model.data.users[i];
    if (user.username == login.username && user.password == login.password) {
      model.app.loggedInId = user.id;
      model.viewState.logIn.password = null;
      model.viewState.logIn.username = null;
      changePage("profile");
    }
  }
}

function changePage(page) {
  model.app.currentPage = page;
  updateView();
}

function getLoggedInUser() {
  let user = null;
  for (let i = 0; i < model.data.users.length; i++) {
    if (model.data.users[i].id == model.app.loggedInId) {
      user = model.data.users[i];
    }
  }
  return user;
}

function createNewUser() {
  const newUser = model.viewState.newUser;
  if (
    newUser.username == null ||
    newUser.password == null ||
    newUser.firstName == null ||
    newUser.lastName == null
  ) {
    return;
  }
  newUser.id = generateId();
  model.data.users.push({
    id: newUser.id,
    username: newUser.username,
    password: newUser.password,
    firstName: newUser.firstName,
    lastName: newUser.lastName,
  });
  model.app.loggedInId = newUser.id;
  model.viewState.newUser.id = null;
  model.viewState.newUser.username = null;
  model.viewState.newUser.password = null;
  model.viewState.newUser.firstName = null;
  model.viewState.newUser.lastName = null;
  changePage("profile");
}

function generateId() {
  const randomId = Math.floor(Math.random() * 1000);
  if (model.data.users.find((element) => element.id == randomId)) {
    generateId();
  } else {
    return randomId;
  }
}
