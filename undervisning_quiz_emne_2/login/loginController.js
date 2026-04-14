function logInUser(userId) {
  model.app.loggedInId = userId;
  changePage("mainPage");
}

function logOut() {
  model.app.loggedInId = null;
  updateView();
}

function checkLogin() {
  const login = model.viewState.logIn;
  for (let user of model.data.users) {
    if (user.email === login.email && user.password === login.password) {
      logInUser(user.id);
      return;
    }
  }
  alert("Wrong password or username!");
}

/*
    - Hvis tid: Quiz-view etc 
*/
