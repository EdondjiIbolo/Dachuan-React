import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configura la carpeta "dist" como carpeta estática
app.use(express.static(join(__dirname, "dist")));

// Redirige todas las rutas a index.html
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

// Inicia el servidor en el puerto 8080
const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
  console.log(`El servidor está ejecutándose en el puerto ${PORT}`);
});
