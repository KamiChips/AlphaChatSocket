import { Server as SocketServer } from 'socket.io';
import http from 'http';
import morgan from 'morgan';
import express from 'express';
import cors from 'cors';
import {PORT} from './config.js'

const app = express();
const server = http.createServer(app)
const io = new SocketServer(server)

app.use(cors())
app.use(morgan("dev"))

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);