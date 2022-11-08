const controller = {}
const { messageBuilder } = require('../../utils/utils')
const { defaultRoute } = require('./defaultRoute')

controller.defaultRoute = async (req, res) => {
    try {
        await defaultRoute(req, res)
    } catch (error) {
        console.log(error)
        return res.status(500).json(messageBuilder(500, "Server error", error))
    }
}




module.exports = controller