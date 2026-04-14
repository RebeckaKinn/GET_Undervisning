function chooseQuiz(quizId) {
  model.viewState.currentQuizId = quizId;
  changePage("activeQuiz");
}

function returnActiveQuiz() {
  return (
    model.data.quizData.find(
      (quiz) => quiz.id === model.viewState.currentQuizId,
    ) || null
  );
}
