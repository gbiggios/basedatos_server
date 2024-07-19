import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repertorio } from './schemas/repertorio.schema';
import { CreateRepertorioDTO } from './dto/repertorio.dto';

@Injectable()
export class RepertorioService {
  constructor(@InjectModel(Repertorio.name) private readonly repertorioModel: Model<Repertorio>) {}

  async createRepertorio(createRepertorioDTO: CreateRepertorioDTO): Promise<Repertorio> {
    const nuevoRepertorio = new this.repertorioModel(createRepertorioDTO);
    return await nuevoRepertorio.save();
  }

  async getRepertorios(): Promise<Repertorio[]> {
    return await this.repertorioModel.find().exec();
  }

  async getRepertorio(id: string): Promise<Repertorio> {
    const repertorio = await this.repertorioModel.findById(id).exec();
    if (!repertorio) {
      throw new NotFoundException(`Repertorio con ID ${id} no encontrado`);
    }
    return repertorio;
  }

  async updateRepertorio(id: string, createRepertorioDTO: CreateRepertorioDTO): Promise<Repertorio> {
    const repertorio = await this.repertorioModel.findByIdAndUpdate(id, createRepertorioDTO, { new: true }).exec();
    if (!repertorio) {
      throw new NotFoundException(`Repertorio con ID ${id} no encontrado`);
    }
    return repertorio;
  }

  async deleteRepertorio(id: string): Promise<Repertorio> {
    const repertorio = await this.repertorioModel.findByIdAndDelete(id).exec();
    if (!repertorio) {
      throw new NotFoundException(`Repertorio con ID ${id} no encontrado`);
    }
    return repertorio;
  }
}
