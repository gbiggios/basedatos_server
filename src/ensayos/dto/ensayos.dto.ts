import { IsNotEmpty, IsDateString, IsArray } from 'class-validator';

export class CreateEnsayoDTO {
    @IsNotEmpty()
    @IsDateString()
    readonly fecha: Date;

    @IsNotEmpty()
    readonly objetivo: string;

    @IsArray()
    readonly asistencia: CreateAsistenciaDTO[];
}

export class CreateAsistenciaDTO {
    @IsNotEmpty()
    readonly miembroID: string;

    @IsNotEmpty()
    readonly presente: boolean;
}
