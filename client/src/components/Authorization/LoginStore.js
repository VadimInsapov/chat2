const {makeAutoObservable} = require("mobx");

class LoginStore {
    email;
    password;

    constructor() {
        makeAutoObservable(this)
    }

    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        this.password = password;
    }

    get TitleForm() {
        return "авторизация";
    }

    get NameButton() {
        return "войти";
    }

    get NameLink() {
        return "зарегистрироваться";
    }
}

export default new LoginStore();