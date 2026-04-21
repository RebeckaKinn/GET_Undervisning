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
            ${question.alternatives.map((element) => /*HTML*/ `<button onclick="setActive(this)">${element.text}</button>`).join(" ")}
        </div>
        </div>
        `;
  }
  return /*HTML*/ `
      <h1>${quiz.name}</h1>
      ${model.viewState.points == 0 ? "" : model.viewState.points}
      <section>${html}</section>
      <button onclick="submitAnswer()">Submit</button>
    `;
}

function setActive(element) {
  let answer = element.innerText;
  element.classList.add("green");
  model.viewState.answers.push(answer);
}

function submitAnswer() {
  let currentQuiz = returnActiveQuiz();
  let correctAnswers = []
  let myAnswers = model.viewState.answers;

 currentQuiz.questions.forEach((element) => {
    element.alternatives.forEach((alt) => {
      if (alt.isCorrect == true) {
        correctAnswers.push(alt)
      }
    });
  });

  for(let elem of correctAnswers){
    for(let answer of myAnswers){
      if(elem.text == answer){
        model.viewState.points++
      }
    }
  }
  updateView();
}



/*
    - Lage quiz logikken
*/
