import { Model } from 'mongoose';
import { Repertorio } from './schemas/repertorio.schema';
import { CreateRepertorioDTO } from './dto/repertorio.dto';
export declare class RepertorioService {
    private readonly repertorioModel;
    constructor(repertorioModel: Model<Repertorio>);
    createRepertorio(createRepertorioDTO: CreateRepertorioDTO): Promise<Repertorio>;
    getRepertorios(): Promise<Repertorio[]>;
    getRepertorio(id: string): Promise<Repertorio>;
    updateRepertorio(id: string, createRepertorioDTO: CreateRepertorioDTO): Promise<Repertorio>;
    deleteRepertorio(id: string): Promise<Repertorio>;
}
