import { MemeService } from "./meme.service";
export declare class MemeController {
    private memeService;
    constructor(memeService: MemeService);
    inicio(response: any): void;
    vistaCrear(response: any, parametrosConsulta: any): void;
    listaUsuarios(response: any, parametrosConsulta: any): Promise<void>;
    crearMemeFormualrio(response: any, parametrosCuerpo: any): Promise<void>;
    eliminarMeme(response: any, parametrosRuta: any): Promise<void>;
    obtenerUno(response: any, parametrosRuta: any): Promise<void>;
    actualizarMeme(response: any, parametrosCuerpo: any, parametrosRuta: any): Promise<void>;
}
