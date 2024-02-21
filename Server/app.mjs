import express from "express";
import crypto from "node:crypto";
import cors from "cors";
import jwt from "jsonwebtoken";
import mysql from "mysql2/promise";

import bcrypt from "bcrypt";
import { validateUserSignin, validateUserlogin } from "./schema/userSchema.mjs";
import { sendVerifyCode } from "./service/mail.mjs";

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

//Rutas
//TODO --> MIGRAR A ARQUITECTURA MVC
app.use((req, res, next) => {
  //verificar si usuario cookies o login
  console.log("hilaaa");
  next();
});
app.post("/login", async (req, res) => {
  const validateData = validateUserlogin(req.body);
  if (validateData.error) {
    return res.status(400).json({ error: validateData.error.message });
  }
  const { email, password } = validateData.data;
  const [querdata, _] = await connection.query(
    "SELECT email, password FROM usuarios WHERE email = ? AND password = ?",
    [email, password]
  );
  const response = await querdata;
  console.log(email, password);
  if (response.length === 0) {
    res.status(401).json({
      error: "invalid user or password",
    });
    return;
  }
  const userInfo = await connection.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email]
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
    email: user.email,
    token,
  };

  res.status(200).json(data);
});
app.post("/verify", async (req, res) => {
  const { email } = req.body;
  const { otpCode } = await sendVerifyCode(email);
  // verificar el codigo y almacenarlo DB
  const saltRounds = 10;
  const myPlaintextPassword = otpCode;
  const salt = bcrypt.genSaltSync(saltRounds);
  const encriptedCode = bcrypt.hashSync(myPlaintextPassword, salt);

  const insertdata = await connection.query(
    "INSERT INTO tokens ( email, secret_word ) VALUES (?,?)",
    [email, encriptedCode]
  );
  res
    .status(200)
    .json({ message: "Codigo de Verificacion enviado correctamente" });
});
app.post("/sign-up", async (req, res) => {
  // validar
  const validateData = validateUserSignin(req.body);
  if (validateData.error) {
    return res.status(400).json({ error: validateData.error.message });
  }
  const { name, username, email, password, phone, rol, verifyCode } =
    validateData;
  //manerjar el error
  const [querdata, _] = await connection.query(
    "SELECT email, secret_word FROM tokens WHERE email = ?",
    [email]
  );

  const inputUser = verifyCode;
  const codeValidate = querdata.map((data) => {
    const code = data.secret_word;
    //comparar codigos
    const isValid = bcrypt.compareSync(inputUser, code);
    return { inputUser };
  });

  if (!codeValidate) {
    console.log("El código OTP no es válido");
    return res.status(498).json({ error: "El código OTP no es válido" });
  }
  //exito: agregar usuario a base de datos
  //loguear
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
    [user.id, name, username, email, password, rol, phone]
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
app.post("/recover", async (req, res) => {
  const validateData = validateUserlogin(req.body);
  if (validateData.error) {
    return res.status(400).json({ error: validateData.error.message });
  }
  const { email, password, verifyCode } = validateData.data;
  //verificar el codigo de verificacion
  const [querydata, a] = await connection.query(
    "SELECT email, secret_word FROM tokens WHERE email = ?",
    [email]
  );

  const inputUser = verifyCode;
  const [codeValidate] = querydata.filter((data) => {
    const code = data.secret_word;
    //comparar codigos
    const isValid = bcrypt.compareSync(inputUser, code);
    if (isValid) return data;
    return false;
  });

  if (!codeValidate) {
    return res.status(498).json({ error: "El código OTP no es válido" });
  }

  const [userData, _] = await connection.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email]
  );
  const [data] = userData;

  console.log(data);
  const userEmail = data?.email;
  if (!userEmail) {
    console.log("no hay usuario");
    return res
      .status(400)
      .send("No se ha encontrado un usuarion con este correo electronico");
  }
  const changePassword = await connection.query(
    "UPDATE  usuarios SET password = ? WHERE email = ?",
    [password, email]
  );

  res.status(200).send("Contraseña actualizado correctamente");
});
app.get("/", (req, res) => {
  res.status(200).send("Hola Mundo");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
