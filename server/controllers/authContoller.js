const {body} = require('express-validator')

class AuthController {
    async login(req, res) {
        let {email, password} = req.body;
        res.status(200).json({msg: 'Hello World!'});
    }

    async registration(req, res) {
        let {email, password} = req.body;
        res.status(200).json({msg: 'Hello World!'});
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
