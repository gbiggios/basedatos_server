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
export declare const EnsayoSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    fecha: Date;
    objetivo: string;
    asistencia: import("mongoose").Types.DocumentArray<{
        presente: boolean;
        miembroID?: import("mongoose").Types.ObjectId;
    }>;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    fecha: Date;
    objetivo: string;
    asistencia: import("mongoose").Types.DocumentArray<{
        presente: boolean;
        miembroID?: import("mongoose").Types.ObjectId;
    }>;
}>> & import("mongoose").FlatRecord<{
    fecha: Date;
    objetivo: string;
    asistencia: import("mongoose").Types.DocumentArray<{
        presente: boolean;
        miembroID?: import("mongoose").Types.ObjectId;
    }>;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
