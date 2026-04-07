updateView();
function updateView() {
  let html = "";
  if (model.app.currentPage === "mainPage") html = mainPage();
  if (model.app.currentPage === "logIn") html = logInView();
  model.app.app.innerHTML = /*HTML*/ `
  <main>${html}</main>
  `;
}

function mainPage() {
  if (model.app.loggedInId == null) {
    return /*HTML*/ `
        <h1>Quiz Game</h1>

        <div>
            <button onclick="changePage('logIn')">Login</button>
            <button>leaderboard</button>
        </div>
    `;
  } else {
    const user = returnLoggedInUser();
    return /*HTML*/ `
        <h1>Quiz Game</h1>
        <h2>Hi ${user.username}</h2>
        <div>
            <button>New Quiz</button>
            <button>leaderboard</button>
            <button onclick="logOut()">Log out</button>
        </div>
    `;
  }
}
