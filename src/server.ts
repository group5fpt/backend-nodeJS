import express from 'express';
import {Pool, Client} from 'pg';
import {route} from './routes/allRoutes';

const app = express();
const port = 3000;
const hostname = '0.0.0.0'



app.use(express.json())
app.use(route);

app.listen(port, hostname, () => console.log(`Server running at ${hostname}:${port}/`))