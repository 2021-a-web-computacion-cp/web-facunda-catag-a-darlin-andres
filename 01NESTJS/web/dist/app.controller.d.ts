import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    HolaTexto(): string;
    HolaHtml(): string;
    HolaJson(): string;
    badRequest(): void;
    internalError(): void;
    setearCookieInsegura(req: any, res: any): void;
    mostrarCookies(req: any): {
        sinFirmar: any;
        firmar: any;
    };
    parametrosConsulta(queryParams: any, params: any): {
        parametrosConsulta: any;
        parametrosRuta: any;
    };
    parametrosCuerpo(bodyParams: any, cabecerasPeticion: any): {
        parametrosCuerpo: any;
        cabeceras: any;
    };
}
