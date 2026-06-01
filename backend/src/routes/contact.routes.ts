import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { sendContactMessage } from '../controllers/contact.controller'
import { validateContact } from '../middleware/validateContact'

const router = Router()

const contactLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 5,
	message: 'Demasiados pedidos. Tente novamente mais tarde.',
})

router.post('/', contactLimiter, validateContact, sendContactMessage)

export default router

