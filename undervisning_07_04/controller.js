function returnLoggedInUser() {
  return model.data.users.find((user) => user.id === model.app.loggedInId);
}

function changePage(newPage) {
  model.app.currentPage = newPage;
  updateView();
}
