"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Auth {
    static Login(data) {
        return new Promise((resolve, reject) => {
            // Using mock model - replace with Supabase implementation later
            if (data.email === "test@example.com" && data.password === "password") {
                const mockUser = {
                    id: "user-123",
                    Email: data.email,
                    Username: "TestUser",
                    Online: true,
                    update: () => { },
                };
                const token = jsonwebtoken_1.default.sign(mockUser.Email, "k33p3m0ut#");
                return resolve({ player: mockUser, token: token });
            }
            else {
                return reject({
                    success: false,
                    message: "Invalid email or password",
                });
            }
        });
    }
}
exports.default = Auth;
//# sourceMappingURL=Auth.js.map