import Express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacienteRoutes from "./routes/pacientesRoutes.js";

const app = Express();
app.use(Express.json());

dotenv.config();

conectarDB();

const dominiosPermitidos = [process.env.FRONTEND_URL];
const corsOptions = {
  origin: function (origin, callback) {
    if (process.argv[2] === '--api') dominiosPermitidos.push(undefined);

    if (dominiosPermitidos.indexOf(origin) !== -1 || !origin) {
      // El origen del request esta permitido
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  }
}

app.use(cors(corsOptions));

app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacienteRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})