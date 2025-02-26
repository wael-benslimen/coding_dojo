import { Router } from "express";
import { createPost, getAllPosts, getOnePost, updatePost, delPost} from '../controllers/post.controller.js'


const router = Router()

router.route('/').get(getAllPosts).post(createPost)
router.route('/:id').get(getOnePost).put(updatePost).delete(delPost)

export default router