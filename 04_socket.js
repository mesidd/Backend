import express from 'express'

import http from 'http'

import path from 'path'

const app = express()

import { Server } from 'socket.io'

const server = http.createServer(app)

const io = new Server(server)


io.on("connection", (socket) => {
  socket.on('user1', (message) => {
    io.emit("message", message);
  } )
})

app.use(express.static(path.resolve("./public")))

app.get('/',(req,res)=>{
  return res.sendFile('./public/index.html')
})

server.listen(4000, ()=> {
  console.log("Server started at 4000 ")
})
