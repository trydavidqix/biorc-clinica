import { body, validationResult } from 'express-validator'
import { NextFunction, Request, Response } from 'express'

export const validateContact = [
  body('name')
    .trim()
    .isLength({ max: 100 })
    .withMessage('Nome demasiado longo')
    .notEmpty()
    .withMessage('Nome é obrigatório')
    .escape(),
  body('email').trim().isEmail().withMessage('Email inválido').normalizeEmail().escape(),
  body('phone')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 20 })
    .withMessage('Telefone demasiado longo')
    .matches(/^[0-9+\s()-]*$/)
    .withMessage('Telefone inválido')
    .escape(),
  body('specialty').optional({ checkFalsy: true }).trim().isLength({ max: 120 }).escape(),
  body('message')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Mensagem demasiado longa')
    .escape(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ success: false, errors: errors.array() })
    }
    next()
  },
]

