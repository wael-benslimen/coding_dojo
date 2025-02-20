import { Router } from 'express'
import { creatBook, getAllBooks, getBookById, editBook, deleteBook } from '../controllers/book.controller.js'

const router = Router()

router.route('/books').get(getAllBooks).post(creatBook)
router.route('/books/:id').get(getBookById).put(editBook).delete(deleteBook)

export default router