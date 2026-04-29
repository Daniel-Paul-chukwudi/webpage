const router = require('express').Router()
const {savecontact,getAll,deleteAll} = require('../controller/contactController')
const {uploads} = require('../middleware/multer')


/**
 * @swagger
 * /contact:
 *   post:
 *     summary: Save a new contact with file upload
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - Name
 *               - email
 *               - companyName
 *               - interestedService
 *               - projectBrief
 *               - fileUpload
 *             properties:
 *               Name:
 *                 type: string
 *                 example: Daniel Saul
 *               email:
 *                 type: string
 *                 format: email
 *                 example: daniel@example.com
 *               phoneNumber:
 *                 type: string
 *                 example: +2348012345678
 *               companyName:
 *                 type: string
 *                 example: TechNova Ltd
 *               interestedService:
 *                 type: string
 *                 example: Web Development
 *               projectBrief:
 *                 type: string
 *                 example: I need a backend system for my platform
 *               fileUpload:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Contact saved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: contact saved successfully
 *                 data:
 *                   type: object
 *       400:
 *         description: Missing required fields or file
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Please enter all fields
 *       500:
 *         description: Server error while saving contact
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error saving contact
 *                 error:
 *                   type: string
 */
router.post('/contact',uploads.single("fileUpload"),savecontact)

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Get all contact records
 *     tags: [Contact]
 *     responses:
 *       200:
 *         description: Successfully retrieved all contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: all contacts in the DB
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: 69ea4f407bb3c43b50f9fbdc
 *                       Name:
 *                         type: string
 *                         example: Daniel Saul
 *                       email:
 *                         type: string
 *                         example: daniel@example.com
 *                       phoneNumber:
 *                         type: string
 *                         example: +2348012345678
 *                       companyName:
 *                         type: string
 *                         example: TechNova Ltd
 *                       interestedService:
 *                         type: string
 *                         example: Web Development
 *                       projectBrief:
 *                         type: string
 *                         example: I need a backend system for my platform
 *                       fileUpload:
 *                         type: object
 *                         properties:
 *                           fileUrl:
 *                             type: string
 *                             example: https://res.cloudinary.com/demo/image/upload/sample.jpg
 *                           filePublicId:
 *                             type: string
 *                             example: sample
 *       500:
 *         description: Server error while fetching contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error fetching contact
 *                 error:
 *                   type: string
 */
router.get('/contacts',getAll)

/**
 * @swagger
 * /contacts:
 *   delete:
 *     summary: Delete all contact records
 *     tags: [Contact]
 *     responses:
 *       200:
 *         description: Successfully deleted all contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: all contacts deleted
 *       500:
 *         description: Server error while deleting contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error deleting contacts
 *                 error:
 *                   type: string
 */
router.delete('/contacts',deleteAll)

module.exports = router

