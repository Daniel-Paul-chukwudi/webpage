const router = require('express').Router()
const {saveconsultation,getAll,deleteAll} = require('../controller/consultationController')



/**
 * @swagger
 * /consultation:
 *   post:
 *     summary: Save a new consultation request
 *     tags:
 *       - Consultation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - email
 *               - phoneNumber
 *               - company
 *               - tier
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: Daniel Saul
 *               email:
 *                 type: string
 *                 format: email
 *                 example: daniel@example.com
 *               phoneNumber:
 *                 type: string
 *                 example: +2348012345678
 *               company:
 *                 type: string
 *                 example: TechNova Ltd
 *               tier:
 *                 type: string
 *                 example: Premium
 *     responses:
 *       201:
 *         description: Consultation saved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: consultation saved successfully
 *                 data:
 *                   type: object
 *       400:
 *         description: Missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Please enter all fields
 *       500:
 *         description: Error saving consultation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error saving consultation
 *                 error:
 *                   type: string
 */
router.post('/consultation',saveconsultation)

/**
 * @swagger
 * /consultations:
 *   get:
 *     summary: Get all consultation records
 *     tags: [Consultation]
 *     responses:
 *       200:
 *         description: Successfully retrieved all consultations
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: all consultations in the DB
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: 69ea4f407bb3c43b50f9fbdc
 *                       fullName:
 *                         type: string
 *                         example: Daniel Saul
 *                       email:
 *                         type: string
 *                         example: daniel@example.com
 *                       phoneNumber:
 *                         type: string
 *                         example: +2348012345678
 *                       company:
 *                         type: string
 *                         example: TechNova Ltd
 *                       tier:
 *                         type: string
 *                         example: Premium
 *       500:
 *         description: Server error while fetching consultations
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error fetching consultation
 *                 error:
 *                   type: string
 */
router.get('/consultations',getAll)

/**
 * @swagger
 * /consultations:
 *   delete:
 *     summary: Delete all consultation records
 *     tags: [Consultation]
 *     responses:
 *       200:
 *         description: Successfully deleted all consultations
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: all consultations deleted
 *       500:
 *         description: Server error while deleting consultations
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error deleting consultations
 *                 error:
 *                   type: string
 */
router.delete('/consultations',deleteAll)

module.exports = router

