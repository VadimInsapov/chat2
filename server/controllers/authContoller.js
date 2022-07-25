const {body} = require('express-validator')
const UserService = require('../services/UserService');
const User = require("../models/User");

class AuthController {
    async login(req, res) {
        try {
            const {email, password} = req.body;
            const token = await UserService.login(email, password);
            res.status(200).json({
                msg: 'Пользователь авторизован!',
                token: token
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({errors: [{msg: e.message}]});
        }
    }

    async registration(req, res) {
        try {
            let {email, password} = req.body;
            await UserService.create(email, password);
            res.status(200).json({
                msg: 'Пользователь успешно зарегистрирован!',
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({errors: [{msg: e.message}]});
        }
    }

    validate() {
        return [
            body('email')
                .not().isEmpty()
                .withMessage('Адрес электронной почты обязателен!')
                .isEmail()
                .withMessage('Неверный адрес электронной почты!'),
            body('password', 'Пароль обязателен!').exists(),
        ]
    }
}

module.exports = new AuthController();
