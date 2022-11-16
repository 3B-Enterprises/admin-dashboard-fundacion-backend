const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    identification: { type: String, required: true, unique: true },
    identificationType: { type: String, enum: ['REGISTRO CIVIL', 'TARJETA DE IDENTIDAD'], required: true, default: 'TARJETA DE IDENTIDAD' },
    dateOfBirth: { type: Date, required: true },
    sexo: { type: String, required: true, enum: ['MASCULINO', 'FEMENINO'] },
    image: { type: String, required: false, default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' },
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    neighborhood: { type: String, required: true },
    leader: { type: String, required: true },
    QR: { type: String, required: true }

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = mongoose.model('user', userModel)