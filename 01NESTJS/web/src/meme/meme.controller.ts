import { BadRequestException, Body, Controller, Get, InternalServerErrorException, Param, Post, Query, Res } from "@nestjs/common";
import { validate } from "class-validator";
import { MemeCrearDto } from "./dto/meme-crear.dto";
import { MemeActualizarDto} from "./dto/meme-actualizar.dto";
import { MemeService } from "./meme.service";


@Controller('meme')
export class MemeController {
    constructor(// Inyeccion dependencias
        private memeService: MemeService,
        ) {}
    
    @Get('inicio')
    inicio(@Res() response){
        response.render('inicio1');
    }
    @Get('vista-crear')
    vistaCrear(@Res() response, @Query() parametrosConsulta) {
      response.render('meme/crear', {
        datos: {
          mensaje: parametrosConsulta.mensaje,
        },
      });
    }
    @Get('lista-memes')
    async listaMemes(@Res() response, @Query() parametrosConsulta) {
      try {
        // validar parametros de consulta con un dto
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
      } catch (error) {
        throw new InternalServerErrorException('Error del servidor');
      }
    }


  
     @Post('crear-meme-formulario')
    async crearMemeFormualrio(@Res() response, @Body() parametrosCuerpo) {

        const memeCrearDto = new MemeCrearDto();
        memeCrearDto.titulo=parametrosCuerpo.titulo;
         memeCrearDto.autor=parametrosCuerpo.autor;
        memeCrearDto.porcentajeReplica=parseFloat(parametrosCuerpo.porcentajeReplica);
        memeCrearDto.fechaCreacion=parametrosCuerpo.fechaCreacion;
        memeCrearDto.longevidad=!!(parametrosCuerpo.longevidad);

        try {

            const errores = await validate(memeCrearDto);
            if (errores.length > 0 ) {
                response.redirect(
                    '/meme/vista-crear' +
                    '?mensaje= Datos erroneos, por favor revicelos y intentelo de nuevo'
                );
                console.log(JSON.stringify(errores));
                throw new BadRequestException('No envia bien parametros: ');

            } else {
                await this.memeService.crearUno(memeCrearDto);
                response.redirect(
                    '/meme/vista-crear' +
                    '?mensaje= Se creo un nuevo meme ',
                );
            }
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error creando meme');

        }
    }

    @Post('eliminar-meme/:idMeme')
    async eliminarMeme(@Res() response, @Param() parametrosRuta) {
        try {
            await this.memeService.eliminarUno(+parametrosRuta.idMeme);
            response.redirect(
                '/meme/lista-memes' + '?mensaje=Se elimino el meme',
            );
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error');
        }
    }

    @Post('actualizar-meme/:idMeme')
    async obtenerUno(@Res() response,  @Param() parametrosRuta) {
        try {
            const respuesta = await this.memeService.buscarUno(+parametrosRuta.idMeme);
            console.log("-----------------------------")
            console.log(respuesta)
            response.render('meme/actualizar', {
                datos: {
                    MEME: respuesta,
                },

            });

        } catch (error) {
            console.error(error)
            throw new InternalServerErrorException('Error')
        }
    }


    @Post('actualizar-meme-formulario/:idMeme')
    async actualizarMeme(
        @Res() response,
        @Body() parametrosCuerpo,
        @Param() parametrosRuta,
    ) {


        const memeActualizarDto = new MemeActualizarDto();
        memeActualizarDto.titulo=parametrosCuerpo.titulo;
        memeActualizarDto.autor=parametrosCuerpo.autor;
        memeActualizarDto.porcentajeReplica=parseFloat(parametrosCuerpo.porcentajeReplica);
        memeActualizarDto.longevidad=!!(parametrosCuerpo.longevidad);
        
        try {
            const errores = await validate(memeActualizarDto);

            if (errores.length > 0) {
                response.redirect(
                    '/meme/lista-memes' +
                    '?mensaje= dado incorrectos, no se pudo actualizar'
                );
                console.log(JSON.stringify(errores));
                throw new BadRequestException('No envia bien parametros: ');


            } else {
                await this.memeService.actualizarUno({
                    id: +parametrosRuta.idMeme,
                    data: memeActualizarDto,
                });
                response.redirect(
                    '/meme/lista-memes' +
                    '?mensaje= Se actualizo el meme ',
                );
            }
        } catch (error) {
            throw new InternalServerErrorException('Error actualizando el meme');
        }
    }
    
}