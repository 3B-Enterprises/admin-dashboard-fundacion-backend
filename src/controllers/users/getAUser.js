const { messageBuilder } = require('../../utils/utils')
const userModel = require('../../models/user-models')

const getUser = async (req, res) => {
    try {
        const user = await userModel.findOne({ identification: req.params.id })
        if(!user){
         return res.status(404).json(messageBuilder(404,"user not found",""))
        }
        return res.status(200).json(messageBuilder(200, "user", user))
    } catch (error) {
        console.log(error)
        return res.status(500).json(messageBuilder(500, "Server error", error))
    }
}

module.exports = {getUser}