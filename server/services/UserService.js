const UserRepository = require("../repositories/UserRepository");
const bcrypt = require("bcrypt");
const TokenService = require("./TokenService");
const FriendsRepository = require("../repositories/FriendsRepository");
const ApiError = require("../errors/ApiError");

class UserService {
    static async create(email, password) {
        let user = await UserRepository.findByEmail(email);
        if (user) {
            throw ApiError.BadRequest("Пользователь уже существует!");
        }
        password = await bcrypt.hash(password, 4);
        await UserRepository.create(email, password);
    }

    static async login(email, password) {
        let user = await UserRepository.findByEmail(email);
        if (!user) {
            throw ApiError.UnauthorizedRequest("Неверный логин или пароль!");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw ApiError.UnauthorizedRequest("Неверный логин или пароль!");
        }
        delete user.password;
        return TokenService.createAccessToken(user);
    }

    static async addFriend(userId, userId2) {
        if (userId === userId2) {
            throw ApiError.BadRequest("Невозможно добавить себя в друзья!");
        }
        const coupleFriends = await FriendsRepository.findFriends(userId, userId2);
        if (coupleFriends) {
            throw ApiError.BadRequest("Пользователи уже друзья!");
        }
        await FriendsRepository.createFriends(userId, userId2);
    }

    static async deleteFriend(userId, userId2) {
        if (userId === userId2) {
            throw ApiError.BadRequest("Невозможно удалить себя из друзей!");
        }
        const coupleFriends = await FriendsRepository.findFriends(userId, userId2);
        if (!coupleFriends) {
            throw ApiError.BadRequest("Пользователи не были друзьями!");
        }
        await FriendsRepository.deleteFriends(coupleFriends);
    }

    static async getFriends(userId) {
        const user = this.tryToGetUserById(userId);
        const friends = await UserRepository.getFriends(userId);
        return friends;
    }

    static async tryToGetUserById(userId){
        const user = await UserRepository.findById(userId);
        if (!user) {
            throw new Error(`Пользователя с id=${userId} не существует!`);
        }
        return user;
    }

    static async getUsersByFullName(name) {
        const nameArray = name.split(/\s+/);
        const lastName = nameArray[1];
        if (!lastName) {
            const users = await UserRepository.getUsersByNameOrLastName(name);
            return users;
        }
        name = nameArray[0];
        const users = await UserRepository.getUsersByFullName(name, lastName);
        return users;
    }
}

module.exports = UserService;