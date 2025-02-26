import Post from "../models/post.model";


const createPost = async(req, res) => {
    try {
        const newPost = Post(req.body)
        
    } catch (error) {
        
    }
}