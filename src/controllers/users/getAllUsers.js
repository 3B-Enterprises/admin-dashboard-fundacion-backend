const { messageBuilder } = require('../../utils/utils')
const userModel = require('../../models/user-models')
const QRCode = require('qrcode')

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({}, '-__v -_id')

        for (let index = 0; index < users.length; index++) {
            const info = users[index]
            const QR = await QRCode.toDataURL(`${process.env.LINK_TO_FRONTEND}/${info.consecutive}`)
            await userModel.findOneAndUpdate({ consecutive: info.consecutive }, { QR : QR })
        }

        return res.status(200).json(messageBuilder(200, "Usuarios", users))
    } catch (error) {
        console.log(error)
        return res.status(500).json(messageBuilder(500, "Server error", error))
    }
}

module.exports = { getAllUsers }