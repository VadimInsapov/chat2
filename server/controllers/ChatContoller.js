const {body} = require('express-validator')
const ChatService = require("../services/ChatService");

class ChatController {
    async create(req, res) {
        try {
            const {name} = req.body;
            const {user: authUser} = req;
            await ChatService.create(authUser.id, name);
            res.status(200).json({
                msg: 'Чат создан!',
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({errors: [{msg: e.message}]});
        }
    }

    async addUserToChat (req, res) {
        try {
            const {name} = req.body;
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
                ]
            }
        }
    }
}

module.exports = new ChatController();
