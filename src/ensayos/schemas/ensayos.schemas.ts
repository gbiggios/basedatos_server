import { Schema, Document } from 'mongoose';

export interface Ensayo extends Document {
  readonly fecha: Date;
  readonly objetivo: string;
  readonly asistencia: Asistencia[];
}

export interface Asistencia {
  readonly miembroID: string;
  readonly presente: boolean;
}

export const EnsayoSchema = new Schema({
  fecha: { type: Date, required: true },
  objetivo: { type: String, required: true },
  asistencia: [{
    miembroID: { type: Schema.Types.ObjectId, ref: 'Member' },
    presente: { type: Boolean, required: true }
  }]
});
