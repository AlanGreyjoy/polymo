"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const Socket_Controller_1 = __importDefault(require("./modules/websocket/Socket.Controller"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = (0, socket_io_1.default)(server);
server.listen(3001, () => {
    console.log("Server listening on port 3000");
});
// Initialize Socket Controller
(0, Socket_Controller_1.default)(io);
//# sourceMappingURL=server.js.map