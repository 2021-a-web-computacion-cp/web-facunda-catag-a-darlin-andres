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
exports.MemeController = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const meme_crear_dto_1 = require("./dto/meme-crear.dto");
const meme_actualizar_dto_1 = require("./dto/meme-actualizar.dto");
const meme_service_1 = require("./meme.service");
let MemeController = class MemeController {
    constructor(memeService) {
        this.memeService = memeService;
    }
    inicio(response) {
        response.render('inicio1');
    }
    vistaCrear(response, parametrosConsulta) {
        response.render('meme/crear', {
            datos: {
                mensaje: parametrosConsulta.mensaje,
            },
        });
    }
    async listaMemes(response, parametrosConsulta) {
        try {
            const respuesta = await this.memeService.buscarMuchos({
                skip: parametrosConsulta.skip ? +parametrosConsulta.skip : undefined,
                take: parametrosConsulta.take ? +parametrosConsulta.take : undefined,
                busqueda: parametrosConsulta.busqueda
                    ? parametrosConsulta.busqueda
                    : undefined,
            });
            response.render('meme/lista', {
                datos: {
                    memes: respuesta,
                    mensaje: parametrosConsulta.mensaje,
                },
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error del servidor');
        }
    }
    async crearMemeFormualrio(response, parametrosCuerpo) {
        const memeCrearDto = new meme_crear_dto_1.MemeCrearDto();
        memeCrearDto.titulo = parametrosCuerpo.titulo;
        memeCrearDto.autor = parametrosCuerpo.autor;
        memeCrearDto.porcentajeReplica = parseFloat(parametrosCuerpo.porcentajeReplica);
        memeCrearDto.fechaCreacion = parametrosCuerpo.fechaCreacion;
        memeCrearDto.longevidad = !!(parametrosCuerpo.longevidad);
        try {
            const errores = await (0, class_validator_1.validate)(memeCrearDto);
            if (errores.length > 0) {
                response.redirect('/meme/vista-crear' +
                    '?mensaje= Datos erroneos, por favor revicelos y intentelo de nuevo');
                console.log(JSON.stringify(errores));
                throw new common_1.BadRequestException('No envia bien parametros: ');
            }
            else {
                await this.memeService.crearUno(memeCrearDto);
                response.redirect('/meme/vista-crear' +
                    '?mensaje= Se creo un nuevo meme ');
            }
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error creando meme');
        }
    }
    async eliminarMeme(response, parametrosRuta) {
        try {
            await this.memeService.eliminarUno(+parametrosRuta.idMeme);
            response.redirect('/meme/lista-memes' + '?mensaje=Se elimino el meme');
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error');
        }
    }
    async obtenerUno(response, parametrosRuta) {
        try {
            const respuesta = await this.memeService.buscarUno(+parametrosRuta.idMeme);
            response.render('meme/actualizar', {
                datos: {
                    MEME: respuesta,
                },
            });
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error');
        }
    }
    async actualizarMeme(response, parametrosCuerpo, parametrosRuta) {
        const memeActualizarDto = new meme_actualizar_dto_1.MemeActualizarDto();
        memeActualizarDto.titulo = parametrosCuerpo.titulo;
        memeActualizarDto.autor = parametrosCuerpo.autor;
        memeActualizarDto.porcentajeReplica = parseFloat(parametrosCuerpo.porcentajeReplica);
        memeActualizarDto.longevidad = !!(parametrosCuerpo.longevidad);
        try {
            const errores = await (0, class_validator_1.validate)(memeActualizarDto);
            if (errores.length > 0) {
                response.redirect('/meme/lista-memes' +
                    '?mensaje= dado incorrectos, no se pudo actualizar');
                console.log(JSON.stringify(errores));
                throw new common_1.BadRequestException('No envia bien parametros: ');
            }
            else {
                await this.memeService.actualizarUno({
                    id: +parametrosRuta.idMeme,
                    data: memeActualizarDto,
                });
                response.redirect('/meme/lista-memes' +
                    '?mensaje= Se actualizo el meme ');
            }
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error actualizando el meme');
        }
    }
};
__decorate([
    (0, common_1.Get)('inicio'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MemeController.prototype, "inicio", null);
__decorate([
    (0, common_1.Get)('vista-crear'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MemeController.prototype, "vistaCrear", null);
__decorate([
    (0, common_1.Get)('lista-memes'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MemeController.prototype, "listaMemes", null);
__decorate([
    (0, common_1.Post)('crear-meme-formulario'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MemeController.prototype, "crearMemeFormualrio", null);
__decorate([
    (0, common_1.Post)('eliminar-meme/:idMeme'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MemeController.prototype, "eliminarMeme", null);
__decorate([
    (0, common_1.Post)('actualizar-meme/:idMeme'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MemeController.prototype, "obtenerUno", null);
__decorate([
    (0, common_1.Post)('actualizar-meme-formulario/:idMeme'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], MemeController.prototype, "actualizarMeme", null);
MemeController = __decorate([
    (0, common_1.Controller)('meme'),
    __metadata("design:paramtypes", [meme_service_1.MemeService])
], MemeController);
exports.MemeController = MemeController;
//# sourceMappingURL=meme.controller.js.map