updateView();
function updateView() {
  let html = "";
  if (model.app.currentPage === "mainPage") html = mainPage();
  else if (model.app.currentPage === "logIn") html = logInView();
  else if (model.app.currentPage === "quiz") html = quizView();
  else if (model.app.currentPage === "activeQuiz") html = activeQuizView();
  model.app.app.innerHTML = /*HTML*/ `
  <main>${html}</main>
  `;
}

function mainPage() {
  const user = returnLoggedInUser();
  return /*HTML*/ `
        <h1>Quiz Game</h1>
        ${user ? /*HTML*/ `<h2>Hi ${user.username}</h2>` : ""}
      
        <div>
          ${user ? /*HTML*/ `<button onclick="changePage('quiz')">New Quiz</button>` : ""}
          ${
            user
              ? /*HTML*/ `<button onclick="logOut()">Log out</button>`
              : /*HTML*/ `<button onclick="changePage('logIn')">Login</button>`
          }
            <button>leaderboard</button>
        </div>
    `;
}
