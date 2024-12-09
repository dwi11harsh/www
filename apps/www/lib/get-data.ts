import dotenv from "dotenv";
import path from "path";
dotenv.config();

export const GetReceiverData = async () => {
  console.log("process .env", process.env.BACKEND_URI);
};
