import { Router } from 'express';
import {getAllTvShows, getAllTvShowsByYear, deleteByTitle, editstaring} from '../controllers/TvController.js'

const router = Router();
// Add routes
router.route('/alltvshows').get(getAllTvShows)
router.route('/alltvshows/:year').get(getAllTvShowsByYear).delete(deleteByTitle)
router.route('/deleteshow/:title').delete(deleteByTitle)
router.route('/updateshow/:title').patch(editstaring)



export default router

