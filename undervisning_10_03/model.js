/*
MODELL: 
    Er delt opp i 3 hoveddeler: 
        - APP
        - VIEWSTATE (input)
        - DATA
 */

const model = {
  app: {
    app: document.getElementById("app"),
    loggedInId: null,
    currentPage: "createNewUser",
  },
  viewState: {
    logIn: {
      username: null,
      password: null,
    },
    newUser: {
      id: null,
      username: null,
      password: null,
      firstName: null,
      lastName: null,
    },
  },
  data: {
    users: [
      {
        id: 0,
        username: "Admin",
        password: "123abc",
        firstName: "Kåre",
        lastName: "Kåresen",
      },
      {
        id: 1,
        username: "Mona",
        password: "abc123",
        firstName: "Mona",
        lastName: "Monesen",
      },
    ],
  },
};
