import { body, validationResult } from 'express-validator'
import { NextFunction, Request, Response } from 'express'

export const validateContact = [
  body('name').trim().notEmpty().withMessage('Nome é obrigatório'),
  body('email').isEmail().withMessage('Email inválido'),
  body('message').optional().trim(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ success: false, errors: errors.array() })
    }
    next()
  },
]

