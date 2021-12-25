import { Router } from "express";
import {ListRouter} from './items.js'

const router = Router();

router.use('/list', ListRouter)

export default router