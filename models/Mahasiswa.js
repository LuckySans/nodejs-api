// (4) buat schema data mahasiswa
const mongoose = require('mongoose')
const MahasiswaSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Mahasiswa', MahasiswaSchema)