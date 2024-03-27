import mongoose from "mongoose";

const pacientesSchema = mongoose.Schema({

    nombre: {
        type: String,
        require: true,
        trim: true
    },
    propietario: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    fecha_alta: {
        type: Date,
        require: true
    },
    sintomas: {
        type: String,
        require: true,
    },
    veterinario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Veterinario"
    }

}, {
    timestamps: true
});

const Pacientes = mongoose.model("Pacientes", pacientesSchema);

export default Pacientes;