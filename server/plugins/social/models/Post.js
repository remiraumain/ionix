import mongoose from "mongoose"

const postSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            maxlength: 380
        }
    }
)

const Post = mongoose.model('Post', postSchema)

export default Post