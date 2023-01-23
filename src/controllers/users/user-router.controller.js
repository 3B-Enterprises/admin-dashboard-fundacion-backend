const controller = {}
const { messageBuilder } = require('../../utils/utils')
const { defaultRoute } = require('./defaultRoute')
const { getAllUsers } = require('./getAllUsers')
const { getUser } = require('./getAUser')
const { login } = require('./login')
const { register } = require('./registerAnUser')
const { deleteAUser } = require('./deleteAUser')

controller.defaultRoute = async (req, res) => {
    try {
        await defaultRoute(req, res)
    } catch (error) {
        console.log(error)
        return messageBuilder(error.statusCode, error.message, '')
    }
}

controller.getAllUsers = async (req, res) => {
    try {
        await getAllUsers(req, res)
    } catch (error) {
        console.log(error)
        return messageBuilder(error.statusCode, error.message, '')
    }
}

controller.loginRoute = async (req, res) => {
    try {
        await login(req, res)
    } catch (error) {
        console.log(error)
        return messageBuilder(error.statusCode, error.message, '')
    }
}

controller.createAnUser = async (req, res) => {
    try {
        await register(req, res)
    } catch (error) {
        console.log(error)
        return messageBuilder(error.statusCode, error.message, '')
    }
}

controller.getAnUser = async (req, res) => {
    try {
        await getUser(req, res)

    } catch (error) {
        console.log(error)
        return messageBuilder(error.statusCode, error.message, '')
    }
}

controller.deleteAUser = async (req, res) => {
    try {

        await deleteAUser(req, res)
    } catch (error) {
        console.log(error)
        return messageBuilder(error.statusCode, error.message, '')
    }
}


module.exports = controller