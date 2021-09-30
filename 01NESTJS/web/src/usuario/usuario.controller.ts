import { BadRequestException, Body, Controller, Get, InternalServerErrorException, Param, Post, Query, Res } from "@nestjs/common";
import { validate } from "class-validator";
import { UsuarioCrearDto } from "./dto/usuario-crear.dto";
import { UsuarioService } from "./usuario.service";

@Controller('usuario')
export class UsuarioController {
    constructor(// Inyeccion dependencias
        private usuarioService: UsuarioService,
        ) {}
    
    @Get('inicio')
    inicio(@Res() response){
        response.render('inicio');
    }
    @Get('vista-crear')
    vistaCrear(@Res() response, @Query() parametrosConsulta) {
      response.render('usuario/crear', {
        datos: {
          mensaje: parametrosConsulta.mensaje,
        },
      });
    }
    @Get('lista-usuarios')
    async listaUsuarios(@Res() response, @Query() parametrosConsulta) {
      try {
        // validar parametros de consulta con un dto
        const respuesta = await this.usuarioService.buscarMuchos({
          skip: parametrosConsulta.skip ? +parametrosConsulta.skip : undefined,
          take: parametrosConsulta.take ? +parametrosConsulta.take : undefined,
          busqueda: parametrosConsulta.busqueda
            ? parametrosConsulta.busqueda
            : undefined,
        });
        response.render('usuario/lista', {
          datos: {
            usuarios: respuesta,
            mensaje: parametrosConsulta.mensaje,
          },
        });
      } catch (error) {
        throw new InternalServerErrorException('Error del servidor');
      }
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