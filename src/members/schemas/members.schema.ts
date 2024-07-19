import { Schema, Document } from 'mongoose';

export const memberSchema = new Schema({
    rut: {
        type: String,
        required: true
    },
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String,
    instrumento: String, // Campo para el instrumento
    correo: String,
    contacto: String,
    tipoUsuario: String,
    comite: String,
    activo: Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    }
});
