const {body} = require('express-validator')
const UserService = require('../services/UserService');

class UserController {
    async addFriend(req, res) {
        try {
            const {userId, userId2} = req.body;
            await UserService.addFriend(userId, userId2);
            res.status(200).json({
                msg: 'Пользователь добавлен в друзья',
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({errors: [{msg: e.message}]});
        }
    }

    validate(method) {
        switch (method){
            case "addFriend" :{
                return [
                    body('userId')
                        .not().isEmpty()
                        .withMessage('Пользователь 1 обязателен!'),
                    body('userId2')
                        .not().isEmpty()
                        .withMessage('Пользователь 2 обязателен!'),
                ]
            }
        }
    }
}

module.exports = new UserController();
