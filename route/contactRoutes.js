const router = require('express').Router()
const {savecontact,getAll,deleteAll} = require('../controller/contactController')
const {uploads} = require('../middleware/multer')


router.post('/contact',uploads.single("fileUpload"),savecontact)

router.get('/contacts',getAll)

router.delete('/contacts',deleteAll)

module.exports = router

