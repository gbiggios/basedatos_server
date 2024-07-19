import { Schema } from 'mongoose';
export declare const EventoSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    fecha: Date;
    descripcion: string;
    lugar: string;
    tipo: "concierto" | "cumpleaños" | "charla" | "master class";
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    fecha: Date;
    descripcion: string;
    lugar: string;
    tipo: "concierto" | "cumpleaños" | "charla" | "master class";
}>> & import("mongoose").FlatRecord<{
    fecha: Date;
    descripcion: string;
    lugar: string;
    tipo: "concierto" | "cumpleaños" | "charla" | "master class";
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
