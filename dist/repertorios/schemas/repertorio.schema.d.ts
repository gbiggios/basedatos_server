import { Document } from 'mongoose';
export declare class InstrumentoAsignado {
    instrumento: string;
    miembro: string;
}
export declare const InstrumentoAsignadoSchema: import("mongoose").Schema<InstrumentoAsignado, import("mongoose").Model<InstrumentoAsignado, any, any, any, Document<unknown, any, InstrumentoAsignado> & InstrumentoAsignado & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, InstrumentoAsignado, Document<unknown, {}, import("mongoose").FlatRecord<InstrumentoAsignado>> & import("mongoose").FlatRecord<InstrumentoAsignado> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare class Repertorio extends Document {
    nombre: string;
    compositor: string;
    existenciaPartitura: boolean;
    instrumentos: string[];
    tipo: string;
    asignaciones: InstrumentoAsignado[];
}
export declare const RepertorioSchema: import("mongoose").Schema<Repertorio, import("mongoose").Model<Repertorio, any, any, any, Document<unknown, any, Repertorio> & Repertorio & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Repertorio, Document<unknown, {}, import("mongoose").FlatRecord<Repertorio>> & import("mongoose").FlatRecord<Repertorio> & Required<{
    _id: unknown;
}>>;
