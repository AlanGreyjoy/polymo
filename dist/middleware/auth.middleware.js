"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const index_1 = __importDefault(require("../models/index"));
const Player = index_1.default.Player;
const verifyToken = (req) => {
    console.log("verifyToken");
    console.log(req);
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=auth.middleware.js.map