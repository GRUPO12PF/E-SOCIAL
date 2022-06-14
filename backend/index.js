import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import booksRoutes from './routes/booksRoutes.js';
import proyectoRoutes from './routes/proyectoRoutes.js';
import categoriesRoutes from './routes/categoriesRoutes.js';
import ordersRoutes from './routes/ordersRoutes.js';


import cors from "cors";
import fileUpload from "express-fileupload";

const app = express();

dotenv.config();
conectarDB();
app.use(express.json());
app.use(
  fileUpload({
    tempFileDir: "./upload",
    useTempFiles: true,
  })
);

//cors
app.use(
	cors({
		origin: '*',
		credentials: true,
		allowedHeaders: [
			'Origin',
			'X-Requested-With',
			'Content-Type',
			'Accept',
			'authorization',
		],
	})
);
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
app.use("/api/orders", ordersRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});