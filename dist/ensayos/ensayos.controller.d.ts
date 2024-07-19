import { CreateEnsayoDTO } from './dto/ensayos.dto';
import { EnsayosService } from './ensayos.service';
export declare class EnsayosController {
    private ensayosService;
    constructor(ensayosService: EnsayosService);
    createEnsayo(res: any, createEnsayoDTO: CreateEnsayoDTO): Promise<any>;
    getEnsayos(res: any): Promise<any>;
    getEnsayo(res: any, ensayoID: any): Promise<any>;
    deleteEnsayo(res: any, ensayoID: any): Promise<any>;
    updateEnsayo(res: any, createEnsayoDTO: CreateEnsayoDTO, ensayoID: any): Promise<any>;
    getEnsayosByMember(res: any, memberID: any): Promise<any>;
}
