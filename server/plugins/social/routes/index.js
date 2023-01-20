import express from 'express'
import postRoutes from './posts.js'

const router = express.Router()

// POSTS
router.use('/posts', postRoutes)

export default router