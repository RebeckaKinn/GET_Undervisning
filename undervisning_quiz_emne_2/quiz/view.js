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
            ${question.alternatives
              .map(
                (element) => /*HTML*/ `
                <input type="radio" id="${element.text}${question.id}" name=${question.question} hidden>
                <label for="${element.text}${question.id}" onclick="setActive(${element.isCorrect}, ${question.id})" class="option">
                  ${element.text}
                </label>
                `,
              )
              .join(" ")}
        </div>
        </div>
        `;
  }
  return /*HTML*/ `
      <h1>${quiz.name}</h1>
      ${model.viewState.answers.length == 0 ? "" : model.viewState.points}
      <section>${html}</section>
      <button onclick="submitAnswer()">Submit</button>
    `;
}

function setActive(element, id) {
  for (let i = 0; i < model.viewState.answers.length; i++) {
    if (model.viewState.answers[i].questionId == id) {
      model.viewState.answers.splice(i, 1);
    }
  }
  model.viewState.answers.push({
    questionId: id,
    isCorrect: element,
  });
}

function submitAnswer() {
  for (let answer of model.viewState.answers) {
    if (answer.isCorrect) {
      model.viewState.points++;
    }
  }

  model.data.leaderboard.push({
    id: Math.floor(Math.random() * 100),
    userId: model.app.loggedInId,
    quizId: returnActiveQuiz().id,
    score: model.viewState.points,
    time: null,
  });

  console.log(model.data.leaderboard);

  // let correctAnswers = [];
  // let myAnswers = model.viewState.answers;

  // currentQuiz.questions.forEach((element) => {
  //   element.alternatives.forEach((alt) => {
  //     if (alt.isCorrect == true) {
  //       correctAnswers.push(alt);
  //     }
  //   });
  // });

  // for (let elem of correctAnswers) {
  //   for (let answer of myAnswers) {
  //     if (elem.text == answer) {
  //       model.viewState.points++;
  //     }
  //   }
  // }
  updateView();
}
