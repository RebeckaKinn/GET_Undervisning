function logInView() {
  return /*HTML*/ `
    <input type="email" placeholder="email" onchange="model.viewState.logIn.email = this.value">
    <input type="password" placeholder="password" onchange="model.viewState.logIn.password = this.value">
    <button onclick="checkLogin()">Log in</button>
    `;
}
