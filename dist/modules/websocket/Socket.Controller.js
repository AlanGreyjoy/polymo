"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("../players/Player"));
const Character_1 = __importDefault(require("../characters/Character"));
// Import controllers
const Auth_Controller_1 = __importDefault(require("../auth/Auth.Controller"));
const Player_Controller_1 = __importDefault(require("../players/Player.Controller"));
const Character_Controller_1 = __importDefault(require("../characters/Character.Controller"));
const Disconnect_Controller_1 = __importDefault(require("./Disconnect.Controller"));
exports.default = (io) => {
    io.on("connection", function (socket) {
        console.log("peer connected");
        const player = new Player_1.default();
        const character = new Character_1.default();
        // Auth
        (0, Auth_Controller_1.default)(socket, player);
        // Players
        (0, Player_Controller_1.default)(socket, player);
        // Characters
        (0, Character_Controller_1.default)(socket, player, character);
        // Handle Disconnects
        (0, Disconnect_Controller_1.default)(socket, player, character);
    });
};
//# sourceMappingURL=Socket.Controller.js.map