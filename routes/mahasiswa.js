const express = require('express')
const router = express.Router()
const Mahasiswa = require('../models/Mahasiswa')

router.post('/', async(req,res) => {
    const mahasiswaPost = new Mahasiswa ({
        nama: req.body.nama,
        alamat: req.body.alamat
    })

    try {
        const mahasiswa = await mahasiswaPost.save()

        res.json(mahasiswa)
    }catch (error){
        res.json({message: error})
    }
})

router.get('/', async(req,res)=> {
    try {
        const mahasiswa = await Mahasiswa.find()

        res.json(mahasiswa)
    }catch (error){
        res.json({message: error})
    }
})
        
module.exports = router