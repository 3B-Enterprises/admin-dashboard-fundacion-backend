const { messageBuilder } = require('../../utils/utils')
const userModel = require('../../models/user-models')

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({},'-__v -_id')
        return res.status(200).json(messageBuilder(200, "Usuarios", users))
    } catch (error) {
        console.log(error)
        return res.status(500).json(messageBuilder(500, "Server error", error))
    }
}

module.exports = { getAllUsers }