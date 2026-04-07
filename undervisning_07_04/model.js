const model = {
  app: {
    app: document.getElementById("app"),
    currentPage: "mainPage",
    loggedInId: null,
  },
  viewState: {
    logIn: {
      email: null,
      password: null,
    },
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
            question: null,
            alternatives: [
              {
                text: "",
                isCorrect: false,
              },
            ],
          },
        ],
      },
    ],
  },
};
