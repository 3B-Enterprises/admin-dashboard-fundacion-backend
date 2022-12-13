const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    consecutive: { type: Number, required: true, unique: true },
    identification: { type: String, required: true, unique: true },
    identificationType: { type: String, enum: ['REGISTRO CIVIL', 'TARJETA DE IDENTIDAD'], required: true, default: 'REGISTRO CIVIL' },
    name: { type: String },
    surname: { type: String },
    dateOfBirth: { type: Date , default : new Date('0001-01-01T00:00:00.000+00:00')},
    image: { type: String, required: false, default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' },
    sexo: { type: String, required: true, enum: ['MASCULINO', 'FEMENINO'] },
    phone1: { type: String },
    phone2: { type: String },
    motherName: { type: String },
    zona: { type: String },
    neighborhood: { type: String },
    address: { type: String },
    fatherName: { type: String },
    anotations: { type: String },
    extra: { type: String },
    QR: { type: String, required: true }

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = mongoose.model('user', userModel)