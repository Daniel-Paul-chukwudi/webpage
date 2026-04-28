const router = require('express').Router()
const {saveconsultation,getAll,deleteAll} = require('../controller/consultationController')


router.post('/consultation',saveconsultation)

router.get('/consultations',getAll)

router.delete('/consultations',deleteAll)

module.exports = router

