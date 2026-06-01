import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoutes from './routes/contact.routes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
  }),
)
app.use(express.json())

app.use('/api/contact', contactRoutes)

app.get('/health', (_, res) => res.json({ status: 'ok' }))

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.log(`🚀 Servidor BIØRC rodando na porta ${PORT}`)
  }
})

