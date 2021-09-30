"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemeModulo = void 0;
const common_1 = require("@nestjs/common");
const Prisma_service_1 = require("../Prisma.service");
const meme_controller_1 = require("./meme.controller");
const meme_service_1 = require("./meme.service");
let MemeModulo = class MemeModulo {
};
MemeModulo = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            meme_service_1.MemeService,
            Prisma_service_1.PrismaService,
        ],
        exports: [
            meme_service_1.MemeService,
        ],
        controllers: [
            meme_controller_1.MemeController,
        ],
    })
], MemeModulo);
exports.MemeModulo = MemeModulo;
//# sourceMappingURL=meme.module.js.map