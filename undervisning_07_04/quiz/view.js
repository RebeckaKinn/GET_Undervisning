function quizView() {
  let html = "";
  for (let i = 0; i < model.data.quizData.length; i++) {
    const quiz = model.data.quizData[i];
    html += /*HTML*/ `
        <button onclick="chooseQuiz(${quiz.id})">${quiz.name}</button>
        `;
  }
  return /*HTML*/ `
    <h1>Choose a Quiz!</h1>
    <section>${html}</section>
    `;
}

function activeQuizView() {
  const quiz = returnActiveQuiz();
  if (!quiz) changePage("mainPage");
  let html = "";
  for (let question of quiz.questions) {
    html += /*HTML*/ `
    <div>
        <h3>${question.question}</h3>
        <div>
            ${question.alternatives.map((element) => /*HTML*/ `<button>${element.text}</button>`).join("")}
        </div>
    </div>
    `;
  }
  return /*HTML*/ `
    <h1>${quiz.name}</h1>
    <section>${html}</section>
    `;
}

/*
    - Lage quiz logikken
*/
