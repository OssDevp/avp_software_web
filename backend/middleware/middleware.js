import jwt from "jsonwebtoken";
import Veterinario from "../models/Veteninario.js";

const checkAuth = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1]; //el req.headers.authorization empieza con Bearer y el token es el segundo elemento
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.veterinario = await Veterinario.findById(decoded.id).select(
        "-password -token -confirmado"
      ) //para que no devuelva el password, el token y el confirmado
    } catch (error) {
      const e = new Error("Token no valido");
      res.status(403).json({ msg: e.message });
    }
  }
  if (!token) {
    const error = new Error("Token inexistente");
    res.status(403).json({ msg: error.message });
  }

  next()
}

export default checkAuth;