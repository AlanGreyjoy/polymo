import express from "express";
import http from "http";
import socketIO from "socket.io";
import socketController from "./modules/websocket/Socket.Controller";

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

server.listen(3001, () => {
  console.log("Server listening on port 3000");
});

// Initialize Socket Controller
socketController(io);
