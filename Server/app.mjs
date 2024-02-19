import express, { json } from "express";
import crypto from "node:crypto";
import cors from "cors";
import jwt from "jsonwebtoken";
import mysql from "mysql2/promise";

const config = {
  host: "localhost",
  user: "root",
  password: "",
  port: "3306",
  database: "mi_base_de_datos",
};

const connection = await mysql.createConnection(config);
const app = express();

const PORT = process.env.PORT || 3000;
//Middleware para capturar el body de una reques en un post
app.use(cors());
app.use(express.json());
app.disable("x-powered-by");
app.use((req, res, next) => {
  //verificar si usuario cookies o login
  console.log("hilaaa");
  next();
});
app.post("/login", async (req, res) => {
  const { name, password } = req.body;

  const querdata = await connection.query(
    "SELECT username, password FROM usuarios WHERE username = ? AND password = ?",
    [name, password]
  );
  const response = await querdata[0];
  if (response.length === 0) {
    console.log("error");
    res.status(401).json({
      error: "invalid user or password",
    });
    return;
  }
  const userInfo = await connection.query(
    "SELECT * FROM usuarios WHERE username = ?",
    [name]
  );
  const [user] = userInfo[0];
  const userForToken = {
    id: user.ID,
    password: user.password,
  };
  const token = jwt.sign(userForToken, "1234", { expiresIn: "3d" });
  const data = {
    name: user.name,
    username: user.username,
    token,
  };
  res.status(200).json(data);
});

app.post("/sign-up", async (req, res) => {
  const { name, username, email, password, phone } = req.body;

  const user = {
    id: crypto.randomUUID(),
    name,
    username,
    email,
    password,
    phone,
  };
  const insertdata = await connection.query(
    "INSERT INTO usuarios (ID, name, username, email, password, rol_id,phone) VALUES (?,?,?,?,?,?,?)",
    [crypto.randomUUID(), name, username, email, password, 2, phone]
  );
  const userForToken = {
    id: user.id,
    password: user.password,
  };
  const token = jwt.sign(userForToken, "1234", { expiresIn: "3d" });
  const data = {
    name: user.name,
    username: user.username,
    token,
  };

  res.status(201).json(data);
});
app.get("/", (req, res) => {
  console.log("hola");
  res.status(200).send("Hola Mundo");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
