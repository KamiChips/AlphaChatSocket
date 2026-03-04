import { Server as SocketServer } from 'socket.io';
import http from 'http';
import morgan from 'morgan';
import express from 'express';
import cors from 'cors';
import {PORT} from './config.js'

const app = express();
const server = http.createServer(app)

app.use(cors())
app.use(morgan("dev"))
const io = new SocketServer(server, {
    cors: {
        origin: 'http://localhost:5173',
    },
})

const users = {}

io.on('connection', (socket) => {
    console.log(socket.id)

    socket.on('join', (nickname) => {
        users[socket.id] = nickname

        console.log(nickname)

        io.emit("message", {
            system: true,
            text: `${nickname} se conectó`
        })

        io.emit("users", Object.values(users))
    })

    socket.on('message', (message) => {
        const nickname = users[socket.id]

        console.log(message)
        io.emit("message", {
            system: false,
            user: nickname,
            text: message,
            senderId: socket.id
        })
    })

    socket.on("disconnect", () => {
        const nickname = users[socket.id]

        io.emit("message", {
            system: true,
            user: nickname,
            text: `${nickname} se desconectó`
        })

        delete users[socket.id]
         io.emit("users", Object.values(users))
    })
})

server.listen(PORT, () => {
    console.log(`Server listening in ${PORT}`)
})