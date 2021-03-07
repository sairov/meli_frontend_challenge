/* External Modules*/
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

/**  
* App Variables 
*/

const app = express();

/**
 * Middlewares
 */

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use(cors());

/**
 * Routes
 */

import itemRoute from './routes/items.router';
app.use('/api', itemRoute);


export default app;