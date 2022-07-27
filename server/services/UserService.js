const UserRepository = require("../repositories/UserRepository");
const bcrypt = require("bcrypt");
const TokenService = require("./TokenService");
const FriendsRepository = require("../repositories/FriendsRepository");

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

    static async addFriend(userId, userId2) {
        if (userId === userId2) {
            throw new Error("Невозможно добавить себя в друзья!");
        }
        const isFriends = await FriendsRepository.findFriends(userId, userId2);
        const isFriendsInverse = await FriendsRepository.findFriends(userId2, userId);
        if (isFriends || isFriendsInverse) {
            throw new Error("Пользователи уже друзья!");
        }
        await FriendsRepository.createFriends(userId, userId2);
    }

    static async getFriends(userId) {
        const user = await UserRepository.findById(userId);
        if (!user) {
            throw new Error(`Пользователя с id=${userId} не существует!`);
        }
        const friends = await UserRepository.getFriends(userId);
        return friends;
    }

    static async getUsersByFullName(name) {
        const nameArray = name.split(/\s+/);
        const lastName = nameArray[1];
        if (!lastName) {
            const users = await await UserRepository.getUsersByNameOrLastName(name);
            return users;
        }
        name = nameArray[0];
        const users = await UserRepository.getUsersByFullName(name, lastName);
        console.log(users);
        return users;
    }
}

module.exports = UserService;