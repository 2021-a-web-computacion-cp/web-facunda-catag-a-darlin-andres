import { BadRequestException, Body, Controller, Get, InternalServerErrorException, Param, Post, Res } from "@nestjs/common";
import { validate } from "class-validator";
import { UsuarioCrearDto } from "./dto/usuario-crear.dto";
import { UsuarioService } from "./usuario.service";

@Controller('usuario')
export class UsuarioController {
    constructor(// Inyeccion dependencias
        private usuarioService: UsuarioService,
        ) {}
    
    @Get('lista-usuarios')
    listaUsuarios(@Res() response){
        response.render('inicio');
    }
    
    @Get(':idUsuario')
    obtenerUno(@Param() parametrosRuta){
        return this.usuarioService.buscarUno(+parametrosRuta.idUsuario);
    }

    @Post()
    async crearUno(@Body() parametrosCuerpo){
        const usuarioCrearDto = new UsuarioCrearDto();
        usuarioCrearDto.nombre=parametrosCuerpo.nombre;
        usuarioCrearDto.apellido=parametrosCuerpo.apellido;
        usuarioCrearDto.fechaCreacion=parametrosCuerpo.fechaCreacion;
        try{
            const errores = await validate(usuarioCrearDto);
            if(errores.length > 0){
                console.log(JSON.stringify(errores));
                throw new BadRequestException('No envia bien parametros');                
            }else{
                return this.usuarioService.crearUno(usuarioCrearDto);
            }
        }catch (error){
            console.error({error: error, mensaje: 'Errores en crear Usuario'});
            throw new InternalServerErrorException('Error servidor');
        }      
    }

    
}