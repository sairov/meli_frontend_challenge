
import { Router } from 'express';
import { ItemsController }from '../controllers/items.controller';
const itemRouter = Router();


/**
 *  Routes Endpoints
 */

itemRouter.get('/items', ItemsController.search);
itemRouter.get('/items/:id', ItemsController.item);



export default itemRouter;