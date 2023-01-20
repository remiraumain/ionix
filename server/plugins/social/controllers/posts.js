import Post from '../models/Post.js'

// CREATE 
export const createPost = async (req, res) => {
    try {
        const { content } = req.body

        const newPost = new Post({
            content
        })
        await newPost.save()

        const post = await Post.find()
        res.status(201).json(post)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}