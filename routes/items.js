import { Router } from "express";
import {List} from '../controllers/index.js';

export const ListRouter = Router();


ListRouter
	.get('/', List.getItems)
	.get('/:id', List.getItemByID);