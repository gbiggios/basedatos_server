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
exports.RepertorioController = void 0;
const common_1 = require("@nestjs/common");
const repertorios_service_1 = require("./repertorios.service");
const repertorio_dto_1 = require("./dto/repertorio.dto");
let RepertorioController = class RepertorioController {
    constructor(repertorioService) {
        this.repertorioService = repertorioService;
    }
    async createRepertorio(res, createRepertorioDTO) {
        const repertorio = await this.repertorioService.createRepertorio(createRepertorioDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Repertorio creado correctamente',
            repertorio,
        });
    }
    async getRepertorios(res) {
        const repertorios = await this.repertorioService.getRepertorios();
        return res.status(common_1.HttpStatus.OK).json({
            repertorios,
        });
    }
    async getRepertorio(res, id) {
        const repertorio = await this.repertorioService.getRepertorio(id);
        if (!repertorio)
            throw new common_1.NotFoundException('Repertorio no encontrado');
        return res.status(common_1.HttpStatus.OK).json(repertorio);
    }
    async updateRepertorio(res, id, createRepertorioDTO) {
        const repertorio = await this.repertorioService.updateRepertorio(id, createRepertorioDTO);
        if (!repertorio)
            throw new common_1.NotFoundException('Repertorio no encontrado');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Repertorio actualizado correctamente',
            repertorio,
        });
    }
    async deleteRepertorio(res, id) {
        const repertorio = await this.repertorioService.deleteRepertorio(id);
        if (!repertorio)
            throw new common_1.NotFoundException('Repertorio no encontrado');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Repertorio eliminado correctamente',
            repertorio,
        });
    }
};
exports.RepertorioController = RepertorioController;
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, repertorio_dto_1.CreateRepertorioDTO]),
    __metadata("design:returntype", Promise)
], RepertorioController.prototype, "createRepertorio", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RepertorioController.prototype, "getRepertorios", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RepertorioController.prototype, "getRepertorio", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, repertorio_dto_1.CreateRepertorioDTO]),
    __metadata("design:returntype", Promise)
], RepertorioController.prototype, "updateRepertorio", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RepertorioController.prototype, "deleteRepertorio", null);
exports.RepertorioController = RepertorioController = __decorate([
    (0, common_1.Controller)('repertorios'),
    __metadata("design:paramtypes", [repertorios_service_1.RepertorioService])
], RepertorioController);
//# sourceMappingURL=repertorios.controller.js.map