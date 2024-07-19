import { Model } from 'mongoose';
import { Ensayo } from './schemas/ensayos.schemas';
import { CreateEnsayoDTO } from './dto/ensayos.dto';
export declare class EnsayosService {
    private readonly ensayoModel;
    constructor(ensayoModel: Model<Ensayo>);
    createEnsayo(createEnsayoDTO: CreateEnsayoDTO): Promise<Ensayo>;
    getEnsayos(): Promise<Ensayo[]>;
    getEnsayo(ensayoID: string): Promise<Ensayo>;
    deleteEnsayo(ensayoID: string): Promise<Ensayo>;
    updateEnsayo(ensayoID: string, createEnsayoDTO: CreateEnsayoDTO): Promise<Ensayo>;
    getEnsayosByMember(memberID: string): Promise<Ensayo[]>;
}
