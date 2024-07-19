export declare class CreateEnsayoDTO {
    readonly fecha: Date;
    readonly objetivo: string;
    readonly asistencia: CreateAsistenciaDTO[];
}
export declare class CreateAsistenciaDTO {
    readonly miembroID: string;
    readonly presente: boolean;
}
