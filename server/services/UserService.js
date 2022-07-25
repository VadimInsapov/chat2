const UserRepository = require("../repositories/UserRepository");
const bcrypt = require("bcrypt");
const TokenService = require("./TokenService");

class UserService {
    static async create(email, password) {
        let user = await UserRepository.findByEmail(email);
        if (user) {
            throw new Error("Пользователь уже существует!");
        }
        password = await bcrypt.hash(password, 4);
        await UserRepository.create(email, password);
    }

    static async login(email, password) {
        let user = await UserRepository.findByEmail(email);
        if (!user) {
            throw new Error("Неверный логин или пароль!");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Неверный логин или пароль!");
        }
        delete user.password;
        return TokenService.createAccessToken(user);
    }
}

module.exports = UserService;