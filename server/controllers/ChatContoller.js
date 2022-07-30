const {body} = require('express-validator')
const ChatService = require("../services/ChatService");

class ChatController {
    async create(req, res) {
        try {
            const {name} = req.body;
            const {user: authUser} = req;
            await ChatService.create(authUser, name);
            res.status(200).json({
                msg: 'Чат создан!',
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({errors: [{msg: e.message}]});
        }
    }

    async addUser(req, res) {
        try {
            const {chatId, userId} = req.body;
            const {user: authUser} = req;
            await ChatService.addUser(authUser, chatId, userId);
            res.status(200).json({
                msg: 'Пользователь добавлен в чат!',
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({errors: [{msg: e.message}]});
        }
    }

    async appointUserRoleInChat(req, res) {
        try {
            const {chatId, userId, isAdmin} = req.body;
            const {user: authUser} = req;
            await ChatService.appointUserRoleInChat(authUser, chatId, userId, isAdmin);
            res.status(200).json({
                msg: 'Роль пользователя в чате изменена!',
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({errors: [{msg: e.message}]});
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
        }
    }
}

module.exports = new ChatController();
