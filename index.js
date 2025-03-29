import express from 'express'
import connectDB from './src/Config/db.config.js'
import dotenv from 'dotenv'
import CORS from 'cors'
import requestLogger from './src/Middlewares/logger.middleware.js'
import errorHandler from './src/Middlewares/errorhandler.middleware.js'
import colors from 'colors'

const allowedOrigins = ['*']

dotenv.config()

const app = express()

app.use(requestLogger)

const PORT = process.env.PORT || 8088

connectDB()

app.use(express.json())

app.use(
  CORS({
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
)

app.get('/', (req, res) => {
  res.send(`<h1>Server is running</h1>`)
})

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${`http://localhost:${PORT}`.blue}`)
})
