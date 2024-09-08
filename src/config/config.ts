import * as dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_CONNECT_URI,
};
