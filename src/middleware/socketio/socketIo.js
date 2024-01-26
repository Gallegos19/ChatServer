import { Server } from "socket.io";
import { createServer } from "http";
import dotenv from "dotenv";

function ConectarSocket(servidor) {
  const server = servidor;
  const PORT = process.env.PORT || 3001;

  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    },
  });

  io.on('connection', (socket) => {
    console.log('Usuario conectado');
    socket

    socket.emit('mensaje', '¡Bienvenido! Estás conectado.');
    socket.on("mensaje", (msg) => {
        console.log(msg)
        io.emit('mensaje',msg)

      });

      socket.broadcast.emit('chat_message',{
        usuario:'INFO',
        mensaje:'Se ha contectado un nuevo usuario'
      });
      
    socket.on('chat_message', (data) => {
      io.emit('chat_message', data);
  });

    socket.on("join_room", (roomNumber) => {
      const roomName = `Room ${roomNumber}`;
      socket.join(roomName);
      console.log(`Usuario se unió a ${roomName}`);
    });

    socket.on("chat_message2", (msg, roomNumber) => {
      const roomName = `Room ${roomNumber}`;
      io.to(roomName).emit("chat message", msg);
      console.log(`Mensaje en ${roomName}: ${msg}`);
    });
  });
}

export default ConectarSocket;
