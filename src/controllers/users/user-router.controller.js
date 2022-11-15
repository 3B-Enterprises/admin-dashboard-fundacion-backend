const controller = {}
const { messageBuilder } = require('../../utils/utils')
const { defaultRoute } = require('./defaultRoute')
const { getAllUsers } = require('./userRoutes')

controller.defaultRoute = async (req, res) => {
    try {
        await defaultRoute(req, res)
    } catch (error) {
        console.log(error)
        return res.status(500).json(messageBuilder(500, "Server error", error))
    }
}

controller.getAllUsers = async (req, res) => {
    try {
        await getAllUsers(req, res)
    } catch (error) {
        console.log(error)
        return res.status(500).json(messageBuilder(500, "Server error", error))
    }
}



module.exports = controller