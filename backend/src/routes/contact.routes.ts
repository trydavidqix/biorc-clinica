import { Router } from 'express'
import { sendContactMessage } from '../controllers/contact.controller'
import { validateContact } from '../middleware/validateContact'

const router = Router()

router.post('/', validateContact, sendContactMessage)

export default router

