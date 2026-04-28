const consultationModel = require('../models/consultationModel')

exports.saveconsultation = async (req,res) =>{
    try {

        const {fullName,email,phoneNumber,company,tier} = req.body

        if(!fullName || !email || !company || !tier || !phoneNumber){
            return res.status(400).json({
                message: "Please enter all fields"
            })
        }


        const newconsultation = new consultationModel({
            fullName,
            company,
            email,
            phoneNumber,
            tier
        })

        await newconsultation.save()
        res.status(201).json({
        message: 'consultation saved successfully',
        data: newconsultation
        })
        
    } catch (error) {
        res.status(500).json({
        message: 'Error saving consultation',
        error:error.message
        })
    }
}

exports.getAll = async (req,res)=>{
    try {
        const all = await consultationModel.find()

        res.status(200).json({
            message: "all consultations in the DB ",
            data: all
        })
    } catch (error) {
        res.status(500).json({
        message: 'Error fetching consultation',
        error:error.message
        })    
    }
}

exports.deleteAll = async (req,res)=>{
    try {
        const all = await consultationModel.deleteMany()

        res.status(200).json({
            message: "all consultations deleted ",
        })
    } catch (error) {
        res.status(500).json({
        message: 'Error deleting consultations',
        error:error.message
        })    
    }
}
