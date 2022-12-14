const { messageBuilder } = require('../../utils/utils')
const userModel = require('../../models/user-models')
const QRCode = require('qrcode')

const register = async (req, res) => {
    if (!req.body.identification|| !req.body.surname
        || !req.body.sexo || !req.body.name || !req.body.fatherName
        || !req.body.motherName || !req.body.neighborhood
        ) return res.status(400).json(messageBuilder(400, 'Debe rellenar todos los campos', ''))
    try {
        const user = await userModel.findOne({ identification: req.body.identification })
        if (!user) {
            const lastUser = await userModel.find({}).sort({ consecutive: -1 })
            const info = {
                "consecutive": lastUser[0].consecutive + 1,
                "identification": req.body.identification,
                "identificationType": req.body.identificationType,
                "name": req.body.name,
                "surname": req.body.name.surname,
                "dateOfBirth": req.body.dateOfBirth,
                "image": req.body.image,
                "sexo": req.body.sexo,
                "phone1": req.body.phone1,
                "phone2": req.body.phone2,
                "motherName": req.body.motherName,
                "zona": req.body.zona,
                "neighborhood": req.body.neighborhood,
                "address": req.body.address,
                "fatherName": req.body.fatherName,
                "anotations": req.body.anotations,
                "extra": req.body.extra,
            }
            const QR = await QRCode.toDataURL(`${process.env.LINK_TO_FRONTEND}/${info.identification}`)

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