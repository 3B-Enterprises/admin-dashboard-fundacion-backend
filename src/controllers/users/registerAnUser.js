const { messageBuilder } = require('../../utils/utils')
const userModel = require('../../models/user-models')
var QRCode = require('qrcode')

const register = async (req, res) => {
    if (!req.body.identification || !req.body.dateOfBirth
        || !req.body.sexo || !req.body.name || !req.body.fatherName
        || !req.body.motherName || !req.body.neighborhood
        || !req.body.leader) return res.status(400).json(messageBuilder(400, 'Debe rellenar todos los campos', ''))
    try {
        const user = await userModel.findOne({ identification: req.body.identification })
        if (!user) {
            const info = {
                "identification": req.body.identification,
                "identificationType": req.body.identificationType,
                "dateOfBirth": req.body.dateOfBirth,
                "sexo": req.body.sexo,
                "image": req.body.image,
                "name": req.body.name,
                "fatherName": req.body.fatherName,
                "motherName": req.body.motherName,
                "neighborhood": req.body.neighborhood,
                "leader": req.body.leader,
            }
            const QR = await QRCode.toDataURL(`${process.env.LINK_TO_FRONTEND}/carnet/${info.identification}` )

            const payload = { ...info, QR }

            await userModel.create(payload)

            return res.status(201).json(messageBuilder(201, 'El usuario se creo correctamente', ''))
        }

        return res.status(208).json(messageBuilder(208, 'El usuario ya está previamente registrado', ''))

    } catch (error) {
        console.log(error)
        return res.status(500).json(messageBuilder(500, error.message, ''))
    }
}

module.exports = { register }