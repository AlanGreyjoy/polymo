import jwt from "jsonwebtoken";
import db from "../../models/index";
import bcrypt from "bcrypt";

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  player: any;
  token: string;
}

interface ErrorResponse {
  success: boolean;
  message: string;
}

class Auth {
  static Login(data: LoginData): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      // Using mock model - replace with Supabase implementation later
      if (data.email === "test@example.com" && data.password === "password") {
        const mockUser = {
          id: "user-123",
          Email: data.email,
          Username: "TestUser",
          Online: true,
          update: () => {},
        };

        const token = jwt.sign(mockUser.Email, "k33p3m0ut#");
        return resolve({ player: mockUser, token: token });
      } else {
        return reject({
          success: false,
          message: "Invalid email or password",
        });
      }
    });
  }
}

export default Auth;
