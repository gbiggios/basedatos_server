import { Schema, Document } from 'mongoose';

export interface Ensayos extends Document {
    readonly fecha: Date;
    readonly objetivo: string;
    readonly asistencia: Asistencia[];
}

export interface Asistencia {
    readonly miembroID: string;
    readonly presente: boolean;
}