
const { messageBuilder } = require('../../utils/utils')
const adminModel = require('../../models/admin-model')
const bcrypt = require('bcrypt')
const auth = require('../../utils/auth')

const login = async (req, res) => {
    try {

        if (!req.body.username || !req.body.password) return res.status(400).json(messageBuilder(400, 'Debe ingresar usuario y contraseña', ''))

        const user = await adminModel.findOne({ username: req.body.username }, '-__v -_id')

        if (!user) return res.status(404).json(messageBuilder(404, 'Username incorrect', ''))

        const payload = {
            'username': user.username,
            'password': user.password
        }
        const validPassword = await bcrypt.compare(req.body.password, payload.password);
        const accesToken = auth.createToken(payload)

        if (validPassword) {
            return res.status(200).json(messageBuilder(200, 'Login sucefully', { accessToken: accesToken, info: user }))
        }

        return res.status(404).json(messageBuilder(404, 'Password incorrect', ''))

    } catch (error) {
        console.log(error)
        return res.status(500).json(messageBuilder(500, error.message, ''))
    }
}

module.exports = { login }