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
exports.RepertorioService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const repertorio_schema_1 = require("./schemas/repertorio.schema");
let RepertorioService = class RepertorioService {
    constructor(repertorioModel) {
        this.repertorioModel = repertorioModel;
    }
    async createRepertorio(createRepertorioDTO) {
        const nuevoRepertorio = new this.repertorioModel(createRepertorioDTO);
        return await nuevoRepertorio.save();
    }
    async getRepertorios() {
        return await this.repertorioModel.find().exec();
    }
    async getRepertorio(id) {
        const repertorio = await this.repertorioModel.findById(id).exec();
        if (!repertorio) {
            throw new common_1.NotFoundException(`Repertorio con ID ${id} no encontrado`);
        }
        return repertorio;
    }
    async updateRepertorio(id, createRepertorioDTO) {
        const repertorio = await this.repertorioModel.findByIdAndUpdate(id, createRepertorioDTO, { new: true }).exec();
        if (!repertorio) {
            throw new common_1.NotFoundException(`Repertorio con ID ${id} no encontrado`);
        }
        return repertorio;
    }
    async deleteRepertorio(id) {
        const repertorio = await this.repertorioModel.findByIdAndDelete(id).exec();
        if (!repertorio) {
            throw new common_1.NotFoundException(`Repertorio con ID ${id} no encontrado`);
        }
        return repertorio;
    }
};
exports.RepertorioService = RepertorioService;
exports.RepertorioService = RepertorioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(repertorio_schema_1.Repertorio.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RepertorioService);
//# sourceMappingURL=repertorios.service.js.map