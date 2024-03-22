import mongoose from "mongoose";

const veterinarioSchema = mongoose.Schema({ //crea el esquema de la base de datos
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    telefono: {
        type: String,
        default: null,
        trim: true
    },
    web: {
        type: String,
        default: null
    },
    token: {
        type: String
    },
    confirmado: {
        type: Boolean,
        default: false
    }
});

const Veterinario = mongoose.model("Veterinario", veterinarioSchema); //esto registra en mongoose el modelo

export default Veterinario;