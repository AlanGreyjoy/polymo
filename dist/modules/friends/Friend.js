"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortid_1 = __importDefault(require("shortid"));
const Player_1 = __importDefault(require("../players/Player"));
class Friend {
    constructor() {
        this.id = shortid_1.default.generate();
        this.player = new Player_1.default();
    }
}
exports.default = Friend;
//# sourceMappingURL=Friend.js.map