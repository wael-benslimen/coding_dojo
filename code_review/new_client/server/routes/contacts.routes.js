import {create, getAll, getOne, updateOne, deleteOne} from "../controllers/contacts.controller.js"
import { Router } from "express" // Importing Express Router for route handling

// Creating a router instance
const router = Router()

router.route("/contacts")
    .get(getAll)
    .post(create)

router.route("/contacts/:id")
    .get(getOne)
    .put(updateOne)
    .delete(deleteOne)

export default router