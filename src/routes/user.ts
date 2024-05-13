import express from 'express'
import { addUser, getUser } from '../controllers/userControllers.js'
const router = express.Router()

router.post('/addUser', addUser)

router.get('/getUser', getUser)

export default router