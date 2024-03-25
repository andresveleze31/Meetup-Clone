import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

import routes from "./routes/index.js";
import expressEjsLayouts from "express-ejs-layouts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

dotenv.config();

//Habilitar EJS como template engine
app.use(expressEjsLayouts)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

//Carpeta Publica
app.use(express.static("public"))

//ROUTING
app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log("Servidor Funcionando en" + process.env.PORT);
});
