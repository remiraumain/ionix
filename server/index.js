import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import socialRoutes from './plugins/social/routes/index.js'

// CONFIGURATIONS
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('short'))
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/assets', express.static(path.join(__dirname, 'public/assets')))
app.use('/images', express.static(path.join(__dirname, 'public/images')))

// ROUTES BY PLUGIN
app.use('/social', socialRoutes)

// MONGOOSE SETUP
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
    })
    .catch((error) => console.log(`${error} did not connect`))