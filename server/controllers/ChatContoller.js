const {body} = require('express-validator')
const ChatService = require("../services/ChatService");

class ChatController {
    async create(req, res) {
        try {
            const {name, userId} = req.body;
            await ChatService.create(name, userId);
            res.status(200).json({
                msg: 'Чат создан!',
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
                    body('userId')
                        .not().isEmpty()
                        .withMessage('Пользователь создающий чат обязателен!'),
                ]
            }
        }
    }
}

module.exports = new ChatController();
