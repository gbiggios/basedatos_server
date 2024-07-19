import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { RepertorioService } from './repertorios.service';
import { CreateRepertorioDTO } from './dto/repertorio.dto';

@Controller('repertorios')
export class RepertorioController {
  constructor(private readonly repertorioService: RepertorioService) {}

  @Post('/create')
  async createRepertorio(@Res() res, @Body() createRepertorioDTO: CreateRepertorioDTO) {
    const repertorio = await this.repertorioService.createRepertorio(createRepertorioDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Repertorio creado correctamente',
      repertorio,
    });
  }

  @Get('/')
  async getRepertorios(@Res() res) {
    const repertorios = await this.repertorioService.getRepertorios();
    return res.status(HttpStatus.OK).json({
      repertorios,
    });
  }

  @Get('/:id')
  async getRepertorio(@Res() res, @Param('id') id: string) {
    const repertorio = await this.repertorioService.getRepertorio(id);
    if (!repertorio) throw new NotFoundException('Repertorio no encontrado');
    return res.status(HttpStatus.OK).json(repertorio);
  }

  @Put('/update/:id')
  async updateRepertorio(@Res() res, @Param('id') id: string, @Body() createRepertorioDTO: CreateRepertorioDTO) {
    const repertorio = await this.repertorioService.updateRepertorio(id, createRepertorioDTO);
    if (!repertorio) throw new NotFoundException('Repertorio no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'Repertorio actualizado correctamente',
      repertorio,
    });
  }

  @Delete('/delete/:id')
  async deleteRepertorio(@Res() res, @Param('id') id: string) {
    const repertorio = await this.repertorioService.deleteRepertorio(id);
    if (!repertorio) throw new NotFoundException('Repertorio no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'Repertorio eliminado correctamente',
      repertorio,
    });
  }
}
