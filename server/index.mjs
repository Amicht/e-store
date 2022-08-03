import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';

config();

const PORT = process.env.PORT;
const server = express();


server.use(cors({origin:'http://localhost:4200/'}));
server.use(express.urlencoded());
server.use(express.json());


server.listen(PORT, () => console.log(`Listening to port ${PORT}`))