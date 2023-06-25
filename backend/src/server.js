import "dotenv/config";
import cors from "cors";
import express from "express";
import { routes } from "./routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => { console.log(`Server running!!!`);});