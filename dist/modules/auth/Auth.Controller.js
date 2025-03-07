"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Auth_1 = __importDefault(require("./Auth"));
const shortid_1 = __importDefault(require("shortid"));
exports.default = (socket, player) => {
    //this is just to keep track of when I program OUTSIDE the socket on accident.
    socket.emit("register", { id: shortid_1.default.generate() });
    /**
     * Login
     */
    socket.on("login", function (data) {
        Auth_1.default.Login(data)
            .then((result) => {
            player.player = result.player;
            socket.emit("loginSuccess", result);
        })
            .catch((err) => {
            console.log(err);
        });
    });
    /**
     * Logout
     */
    socket.on("logout", (data) => {
        // Logout implementation
    });
};
//# sourceMappingURL=Auth.Controller.js.map