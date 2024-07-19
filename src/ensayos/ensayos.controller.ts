import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Query, NotFoundException, Param } from '@nestjs/common';
import { CreateEnsayoDTO } from './dto/ensayos.dto';
import { EnsayosService } from './ensayos.service';

@Controller('ensayos')
export class EnsayosController {
    constructor(private ensayosService: EnsayosService) {}

    @Post('/create')
    async createEnsayo(@Res() res, @Body() createEnsayoDTO: CreateEnsayoDTO) {
        const ensayo = await this.ensayosService.createEnsayo(createEnsayoDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Ensayo creado correctamente',
            ensayo
        });
    }

    @Get('/')
    async getEnsayos(@Res() res) {
        const ensayos = await this.ensayosService.getEnsayos();
        return res.status(HttpStatus.OK).json({
            ensayos
        });
    }

    @Get('/:ensayoID')
    async getEnsayo(@Res() res, @Param('ensayoID') ensayoID) {
        const ensayo = await this.ensayosService.getEnsayo(ensayoID);
        if (!ensayo) throw new NotFoundException('Ensayo no encontrado');
        return res.status(HttpStatus.OK).json(ensayo);
    }

    @Delete('/delete')
    async deleteEnsayo(@Res() res, @Query('ensayoID') ensayoID) {
        const deletedEnsayo = await this.ensayosService.deleteEnsayo(ensayoID);
        if (!deletedEnsayo) throw new NotFoundException('Ensayo no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Ensayo eliminado correctamente',
            deletedEnsayo
        });
    }

    @Put('/update')
    async updateEnsayo(@Res() res, @Body() createEnsayoDTO: CreateEnsayoDTO, @Query('ensayoID') ensayoID) {
        const updatedEnsayo = await this.ensayosService.updateEnsayo(ensayoID, createEnsayoDTO);
        if (!updatedEnsayo) throw new NotFoundException('Ensayo no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Ensayo actualizado correctamente',
            updatedEnsayo
        });
    }

    @Get('/by-member/:memberID')
    async getEnsayosByMember(@Res() res, @Param('memberID') memberID) {
      const ensayos = await this.ensayosService.getEnsayosByMember(memberID);
      return res.status(HttpStatus.OK).json({
        ensayos
      });
    }
}
