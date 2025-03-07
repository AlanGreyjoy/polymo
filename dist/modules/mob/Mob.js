"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortid_1 = __importDefault(require("shortid"));
const Faction_1 = __importDefault(require("../factions/Faction"));
class Mob {
    constructor() {
        this.id = shortid_1.default.generate();
        this.name = "";
        this.description = "";
        this.worldPosition = "";
        this.worldRotation = "";
        this.level = 1;
        this.faction = new Faction_1.default();
    }
}
exports.default = Mob;
//# sourceMappingURL=Mob.js.map