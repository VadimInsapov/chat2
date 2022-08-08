const {makeAutoObservable} = require("mobx");

class RegistrationStore {
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
        return "регистрация";
    }

    get NameButton() {
        return "зарегистрироваться";
    }

    get NameLink() {
        return "авторизоваться";
    }
}

export default new RegistrationStore();