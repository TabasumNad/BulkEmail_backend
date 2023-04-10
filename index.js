import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import router from "./routers/router.js"
import express from "express";
const app = express();
import { MongoClient } from "mongodb";


const PORT = 4000;
const MONGO_URL = "mongodb://127.0.0.1";

export const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");

// middle ware
app.use(express.json());
app.use(cors());
app.use(router)




// app.get("/", function (request, response) {
//   response.send("🙋‍♂️, 🌏 🎊✨🤩 to send a mail");
// });

app.listen(PORT, () => console.log(`The server started in : ${PORT} ✨✨ to create an email sender`));
