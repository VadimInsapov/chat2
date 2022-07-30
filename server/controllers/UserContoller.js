const {body, param, query} = require('express-validator')
const UserService = require('../services/UserService');

class UserController {
    async addFriend(req, res) {
        try {
            const {user: authUser} = req;
            const {userId} = req.body;
            await UserService.addFriend(authUser.id, userId);
            res.status(200).json({
                msg: 'Пользователь добавлен в друзья',
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({errors: [{msg: e.message}]});
        }
    }

    async deleteFriend(req, res) {
        try {
            const {user: authUser} = req;
            const {userId} = req.body;
            await UserService.deleteFriend(authUser.id, userId);
            res.status(200).json({
                msg: 'Пользователь удалён из друзей!',
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({errors: [{msg: e.message}]});
        }
    }

    async getFriends(req, res) {
        try {
            const {user: authUser} = req;
            const friends = await UserService.getFriends(authUser.id);
            res.status(200).json({
                msg: 'Друзья успешно получены!',
                friends
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({errors: [{msg: e.message}]});
        }
    }

    async getUsersByName(req, res) {
        try {
            const {name} = req.query;
            const users = await UserService.getUsersByFullName(name);
            res.status(200).json({
                msg: 'Пользователи успешно получены!',
                users
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({errors: [{msg: e.message}]});
        }
    }

    validate(method) {
        switch (method) {
            case "addOrDeleteFriend" : {
                return [
                    body('userId')
                        .not().isEmpty()
                        .withMessage('Добавяемый в друзья пользователь обязателен!'),
                ]
            }
            case "getUsersByName" : {
                return [
                    query('name')
                        .not().isEmpty()
                        .withMessage('Имя искомого пользователя обязано быть в запросе!'),
                ]
            }
        }
    }
}

module.exports = new UserController();
