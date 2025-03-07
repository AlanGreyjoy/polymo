import jwt from "jsonwebtoken";
import db from "../models/index";

const Player = db.Player;

export const verifyToken = (req: any): void => {
  console.log("verifyToken");
  console.log(req);
};
