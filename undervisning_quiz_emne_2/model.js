const model = {
  app: {
    app: document.getElementById("app"),
    currentPage: "quiz",
    loggedInId: 1,
  },
  viewState: {
    logIn: {
      email: null,
      password: null,
    },
    currentQuizId: null,
  },
  data: {
    users: [
      {
        id: 1,
        username: "mauritz",
        password: "123",
        email: "mai@mail.com",
      },
    ],

    leaderboard: [
      {
        id: 3,
        userId: 1,
        quizId: 2,
        score: null,
        time: null,
      },
    ],

    quizData: [
      {
        id: 2,
        name: "superQuiz",
        questions: [
          {
            question: "Rabbits can't vomit.",
            alternatives: [
              {
                text: "True",
                isCorrect: false,
              },
              {
                text: "False",
                isCorrect: true,
              },
            ],
          },
        ],
      },
    ],
  },
};
