import { RepertorioService } from './repertorios.service';
import { CreateRepertorioDTO } from './dto/repertorio.dto';
export declare class RepertorioController {
    private readonly repertorioService;
    constructor(repertorioService: RepertorioService);
    createRepertorio(res: any, createRepertorioDTO: CreateRepertorioDTO): Promise<any>;
    getRepertorios(res: any): Promise<any>;
    getRepertorio(res: any, id: string): Promise<any>;
    updateRepertorio(res: any, id: string, createRepertorioDTO: CreateRepertorioDTO): Promise<any>;
    deleteRepertorio(res: any, id: string): Promise<any>;
}
