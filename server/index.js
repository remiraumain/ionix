const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000

const socialRoutes = require('./plugins/social/routes')

app.use(morgan('short'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(socialRoutes)

app.listen(port)