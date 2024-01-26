import cors from 'cors';
import dotenv from 'dotenv';
import express from "express";
import indexRoute from './src/routes/index.route.js';
import database from './src/config/database.js';
import { Server } from 'socket.io';
import { createServer } from 'http';
import ConectarSocket from './src/middleware/socketio/socketIo.js';
import { getContadorNotis } from './src/utils/constans/contadorLong.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/",indexRoute);
app.get('/notis', (req, res) => {
  // Obtener el contador de notificaciones desde tu módulo contadorLong.js
  const contadorNotis = getContadorNotis();
  res.json({ contadorNotis });
});
dotenv.config();
app.set("PORT", process.env.PORT || 3003);
const server = createServer(app);
ConectarSocket(server);
 const PORT = process.env.PORT || 3001;


server.listen(PORT, () => {
    console.log(`Servidor y Socket.IO en ejecución en http://localhost:${PORT}`);
  });
  app.use("*", (req,res)=>{  res.status(404).send('No está mi mike');});
database.connect()
.then(()=>{console.log("database connected")})
.catch((error) => { console.log(error)})

