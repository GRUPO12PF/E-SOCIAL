
import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import booksRoutes from './routes/booksRoutes.js';
import proyectoRoutes from './routes/proyectoRoutes.js';
import categoriesRoutes from './routes/categoriesRoutes.js';
import fileUpload from "express-fileupload";

import cors from "cors";

const app = express();
app.use(express.json())
dotenv.config()
app.use(
  fileUpload({
    tempFileDir: "./upload",
    useTempFiles: true,
  })
);
conectarDB();

//cors
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Routing
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/books", booksRoutes);
app.use("/api/proyectos", proyectoRoutes);
app.use("/api/categories", categoriesRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});