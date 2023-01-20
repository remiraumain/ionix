import express from 'express'
import { createPost } from '../controllers/posts.js'

const router = express.Router()

// CREATE
router.post('/new', createPost)

export default router