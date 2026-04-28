function chooseQuiz(quizId) {
  model.viewState.currentQuizId = quizId;
  model.viewState.points = 0;
  model.viewState.answers = [];
  changePage("activeQuiz");
}

function returnActiveQuiz() {
  return (
    model.data.quizData.find(
      (quiz) => quiz.id === model.viewState.currentQuizId,
    ) || null
  );
}
