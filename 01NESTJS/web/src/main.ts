import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// Variables Primitivas 
// Tipos de variables

var variableUno = 1; // No usamos Var 
let variableDos = 2;

variableUno = 3;
variableDos = 4;


// INMUTABLES (No se pueden reasignar x-> !=)
const variableTres = 5;

// variableTres = 2; // error

// Variables Primitivas (Typescript)

const texto: string =''; //""
const numeroEntero: number =1;
const numeroFlotante: number = 1.2;
const soyEstudiante: boolean = true;//false
const noDefinido = undefined;
const noHayNada = null;
const fecha: Date = new Date();

// Duck Typing
const textoDos = 'Adrian';
let cualquiera: any = 'Victoria';
cualquiera = 1;
cualquiera = true;
cualquiera = new Date();

// clases 
class Usuario {
  constructor(
    public nombre: string,
    public apellido: string
  ){

  }
}

const usuario: Usuario= new Usuario(nombre:'Adrian', apellido:'Eguez');
usuario.nombre;
usuario.apellido;

interface UsuarioInterface {
  nombre: string;
  apellido: string;
  edad?: number; //? => Opcional // Valor por defecto es undefind

}


// Punteros referencias

// primitivas
let edadAntigua = 22;
let otraEdad= edadAntigua; // VALOR

edadAntigua += 1; // 23
otraEdad -= 1; // 21

// Objeto 
let objetoEdad = {
  edad: 22,
};

let otraEdadObjeto = objetoEdad; // Referencia

