import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);
// const previusDirectory = path.join(__dirname, "..");

// Configura la carpeta "dist" como carpeta estática
app.use(express.static(join(__dirname, "dist")));

// Redirige todas las rutas a index.html
app.get("*", (req, res) => {
  console.log("holaaaaaaa");
  // console.log(join(__dirname, "dist", "index.html"));
  res.sendFile(join(__dirname, "dist", "index.html"));
});

// Inicia el servidor en el puerto 8080
const PORT = process.env.PORT ?? 5500;
app.listen(PORT, () => {
  const file = join(__dirname, "dist", "index.html");
  console.log(file);
  console.log(
    `El servidor está ejecutándose en el puerto http://localhost:${PORT}`
  );
});
