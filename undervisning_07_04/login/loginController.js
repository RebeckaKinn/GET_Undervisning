function saveLoggedInUserId(userId) {
  model.app.loggedInId = userId;
  changePage("mainPage");
}

function logOut() {
  model.app.loggedInId = null;
  updateView();
}

/*
    Lage LogIn
*/
