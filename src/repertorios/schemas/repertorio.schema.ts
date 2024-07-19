import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class InstrumentoAsignado {
  @Prop({ required: true })
  instrumento: string;

  @Prop({ required: true })
  miembro: string;
}

export const InstrumentoAsignadoSchema = SchemaFactory.createForClass(InstrumentoAsignado);

@Schema()
export class Repertorio extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  compositor: string;

  @Prop({ required: true })
  existenciaPartitura: boolean;

  @Prop({ required: true, type: [String] })
  instrumentos: string[];

  @Prop({ required: true })
  tipo: string; // 'tutti', 'vientos', 'cuerda', 'camara'

  @Prop({ type: [InstrumentoAsignadoSchema], default: [] })
  asignaciones: InstrumentoAsignado[];
}

export const RepertorioSchema = SchemaFactory.createForClass(Repertorio);
