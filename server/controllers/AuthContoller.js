const {body} = require('express-validator')
const UserService = require('../services/UserService');

class AuthController {
    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const token = await UserService.login(email, password);
            res.status(200).json({
                msg: 'Пользователь авторизован!',
                token: token
            });
        } catch (e) {
            next(e);
        }
    }

    async registration(req, res, next) {
        try {
            let {email, password} = req.body;
            await UserService.create(email, password);
            res.status(200).json({
                msg: 'Пользователь успешно зарегистрирован!',
            });
        } catch (e) {
            next(e);
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
