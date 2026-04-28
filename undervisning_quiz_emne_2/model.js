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
    answers: [],
    points: 0,
    leaderboard: {
      id: null,
      userId: null,
      quizId: null,
      score: null,
      time: null,
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
        score: 2,
        time: null,
      },
    ],

    quizData: [
      {
        id: 2,
        name: "superQuiz",
        questions: [
          {
            id: 1,
            question:
              "The shotgun appears in every numbered Resident Evil game.",
            alternatives: [
              {
                text: "True",
                isCorrect: true,
              },
              {
                text: "False",
                isCorrect: false,
              },
            ],
          },
          {
            id: 2,
            question: "A tiger has black dots.",
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
