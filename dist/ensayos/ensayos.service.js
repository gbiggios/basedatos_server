"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnsayosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let EnsayosService = class EnsayosService {
    constructor(ensayoModel) {
        this.ensayoModel = ensayoModel;
    }
    async createEnsayo(createEnsayoDTO) {
        const newEnsayo = new this.ensayoModel(createEnsayoDTO);
        return await newEnsayo.save();
    }
    async getEnsayos() {
        return await this.ensayoModel.find().exec();
    }
    async getEnsayo(ensayoID) {
        const ensayo = await this.ensayoModel.findById(ensayoID).exec();
        if (!ensayo) {
            throw new common_1.NotFoundException('Ensayo no encontrado');
        }
        return ensayo;
    }
    async deleteEnsayo(ensayoID) {
        const deletedEnsayo = await this.ensayoModel.findByIdAndDelete(ensayoID).exec();
        if (!deletedEnsayo) {
            throw new common_1.NotFoundException('Ensayo no encontrado');
        }
        return deletedEnsayo;
    }
    async updateEnsayo(ensayoID, createEnsayoDTO) {
        const updatedEnsayo = await this.ensayoModel.findByIdAndUpdate(ensayoID, createEnsayoDTO, { new: true }).exec();
        if (!updatedEnsayo) {
            throw new common_1.NotFoundException('Ensayo no encontrado');
        }
        return updatedEnsayo;
    }
    async getEnsayosByMember(memberID) {
        return this.ensayoModel.find({ 'asistencia.miembroID': memberID }).exec();
    }
};
exports.EnsayosService = EnsayosService;
exports.EnsayosService = EnsayosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Ensayo')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EnsayosService);
//# sourceMappingURL=ensayos.service.js.map