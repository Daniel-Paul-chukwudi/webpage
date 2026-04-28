const contactModel = require('../models/contactModel')
const {uploadImageToCloudinary,deleteImageFromCloudinary} = require('../helper/fileUpload')
const fs = require('fs')

exports.savecontact = async (req,res) =>{
    try {

        const docs = req.file

        const {Name,email,phoneNumber,companyName,interestedService,projectBrief} = req.body

        if(!Name || !companyName || !email || !interestedService || !projectBrief){
            return res.status(400).json({
                message: "Please enter all fields"
            })
        }

        if(!req.file){
            return res.status(400).json({
                message: "Please enter all fields"
            })
        }

        const file = await uploadImageToCloudinary(req.file.path)
        

        const newcontact = new contactModel({
            Name,
            companyName,
            email,
            phoneNumber: phoneNumber?phoneNumber : '',
            interestedService,
            projectBrief,
            fileUpload:{
                fileUrl: file.SecureUrl,
                filePublicId: file.PublicId
            }
            
        })

        await newcontact.save()
        res.status(201).json({
        message: 'contact saved successfully',
        data: newcontact
        })
        
    } catch (error) {
        res.status(500).json({
        message: 'Error saving contact',
        error:error.message
        })
    }
}

exports.getAll = async (req,res)=>{
    try {
        const all = await contactModel.find()
        // const {role} = req.contact
        // if(role !== "admin"){
        //     return res.status(401).json({
        //     message: "unauthorized"
        // })
        // }

        res.status(200).json({
            message: "all contacts in the DB ",
            data: all
        })
    } catch (error) {
        res.status(500).json({
        message: 'Error fetching contact',
        error:error.message
        })    
    }
}

exports.deleteAll = async (req,res)=>{
    try {
        const all = await contactModel.deleteMany()

        res.status(200).json({
            message: "all contacts deleted "
        })
    } catch (error) {
        res.status(500).json({
        message: 'Error deleting contacts',
        error:error.message
        })    
    }
}

