const {body, param} = require('express-validator')
const ChatService = require("../services/ChatService");

class ChatController {
    async create(req, res, next) {
        try {
            const {name} = req.body;
            const {user: authUser} = req;
            await ChatService.create(authUser, name);
            res.status(200).json({
                msg: 'Чат создан!',
            });
        } catch (e) {
            next(e);
        }
    }

    async addUser(req, res, next) {
        try {
            const {chatId, userId} = req.body;
            const {user: authUser} = req;
            await ChatService.addUser(authUser, chatId, userId);
            res.status(200).json({
                msg: 'Пользователь добавлен в чат!',
            });
        } catch (e) {
            next(e);
        }
    }

    async appointUserRole(req, res, next) {
        try {
            const {chatId, userId, isAdmin} = req.body;
            const {user: authUser} = req;
            await ChatService.appointUserRole(authUser, chatId, userId, isAdmin);
            res.status(200).json({
                msg: 'Роль пользователя в чате изменена!',
            });
        } catch (e) {
            next(e);
        }
    }

    async deleteUser(req, res, next) {
        try {
            const {chatId, userId} = req.body;
            await ChatService.deleteUser(chatId, userId);
            res.status(200).json({
                msg: 'Пользователь удалён из чата!',
            });
        } catch (e) {
            next(e);
        }
    }

    async getUsers(req, res, next) {
        try {
            const {chatId} = req.params;
            const {user: authUser} = req;
            const usersInChat = await ChatService.getUsers(chatId, authUser.id);
            res.status(200).json({
                msg: 'Пользователи по чату успешно получены!',
                users: usersInChat,
            });
        } catch (e) {
            next(e);
        }
    }

    validate(method) {
        switch (method) {
            case "create" : {
                return [
                    body('name')
                        .not().isEmpty()
                        .withMessage('Название чата обязательно!'),
                ]
            }
            case "addUser" : {
                return [
                    body('chatId')
                        .not().isEmpty()
                        .withMessage('ID чата обязателен!'),
                    body('userId')
                        .not().isEmpty()
                        .withMessage('ID добавляемого пользователя обязателен!'),
                ]
            }
            case "appointUserRoleInChat" : {
                return [
                    body('chatId')
                        .not().isEmpty()
                        .withMessage('ID чата обязателен!'),
                    body('userId')
                        .not().isEmpty()
                        .withMessage('ID добавляемого пользователя обязателен!'),
                    body('isAdmin')
                        .not().isEmpty()
                        .withMessage('Роль пользователя обязательна!'),
                ]
            }
            case "deleteUser" : {
                return [
                    body('chatId')
                        .not().isEmpty()
                        .withMessage('ID чата обязателен!'),
                    body('userId')
                        .not().isEmpty()
                        .withMessage('ID добавляемого пользователя обязателен!'),
                ]
            }
            case "getUsers" : {
                return [
                    param('chatId')
                        .not().isEmpty()
                        .withMessage('ID чата обязателен!'),
                ]
            }
        }
    }
}

module.exports = new ChatController();
