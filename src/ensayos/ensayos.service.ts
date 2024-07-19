import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ensayo } from './schemas/ensayos.schemas';
import { CreateEnsayoDTO } from './dto/ensayos.dto';

@Injectable()
export class EnsayosService {
  constructor(
    @InjectModel('Ensayo') private readonly ensayoModel: Model<Ensayo>,
  ) {}

  async createEnsayo(createEnsayoDTO: CreateEnsayoDTO): Promise<Ensayo> {
    const newEnsayo = new this.ensayoModel(createEnsayoDTO);
    return await newEnsayo.save();
  }

  async getEnsayos(): Promise<Ensayo[]> {
    return await this.ensayoModel.find().exec();
  }

  async getEnsayo(ensayoID: string): Promise<Ensayo> {
    const ensayo = await this.ensayoModel.findById(ensayoID).exec();
    if (!ensayo) {
      throw new NotFoundException('Ensayo no encontrado');
    }
    return ensayo;
  }

  async deleteEnsayo(ensayoID: string): Promise<Ensayo> {
    const deletedEnsayo = await this.ensayoModel.findByIdAndDelete(ensayoID).exec();
    if (!deletedEnsayo) {
      throw new NotFoundException('Ensayo no encontrado');
    }
    return deletedEnsayo;
  }

  async updateEnsayo(ensayoID: string, createEnsayoDTO: CreateEnsayoDTO): Promise<Ensayo> {
    const updatedEnsayo = await this.ensayoModel.findByIdAndUpdate(ensayoID, createEnsayoDTO, { new: true }).exec();
    if (!updatedEnsayo) {
      throw new NotFoundException('Ensayo no encontrado');
    }
    return updatedEnsayo;
  }

  async getEnsayosByMember(memberID: string): Promise<Ensayo[]> {
    return this.ensayoModel.find({ 'asistencia.miembroID': memberID }).exec();
  }
}
