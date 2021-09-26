import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); // npm run start 
}
bootstrap();


/*clase
abstract class Nombre {
  public nombrePropiedad?: string;//undefined
  private apellidoPropiedad: string='Eguez';
  protected edad=1;// number(Duck Typing)
  static comun: number=10;
  propiedadPubica: string;
  constructor(
    propiedadPublicaParametro:string, //parametro
    public propiedadRapido: string, // transforma una propiedad
    ) {
    this.apellidoPropiedad = propiedadPublicaParametro;
    this.propiedadRapido;
  }

  public funcionPublica(parametroString: string): void {
    // no hay return = undefined
  }
  private funcionPrivada(parametroString: string, // ? = puede ser undefined
                       parametroNumber?: number)  { // omitir :void (defecto)
    // no hay return = undefined
  }
  protected funcionPublica1(): number {
    return 1;
  }
  static funcionEstatica(): string {
    return 'string';
  }

}*/

/* // packege json...
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

const usuario: Usuario= new Usuario( 'Adrian', 'Eguez');
usuario.nombre;
usuario.apellido;

interface UsuarioInterface {
  nombre: string;
  apellido: string;
  edad?: number; //? => Opcional // Valor por defecto es undefind

}

let objetoUsuario: UsuarioInterface = {
  nombre: 'Adrian',
  apellido: 'Eguez',
};
objetoUsuario.nombre;
objetoUsuario.apellido;
objetoUsuario.edad;
console.log(usuario);
console.log(objetoUsuario);

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

let otraEdadObjeto = objetoEdad; // REFERENCIA
otraEdadObjeto.edad = otraEdadObjeto.edad + 1; // 23
console.log(otraEdadObjeto.edad);
objetoEdad.edad; // 23
console.log(otraEdadObjeto.edad);
objetoEdad.edad = objetoEdad.edad + 1; // 24
otraEdadObjeto.edad; // 24
let otraEdadObjetoClonado = {...objetoEdad}; // Clonación Objetos
const arregloEjemplo = [1, 2, 3]
let arregloClonado = [...arregloEjemplo]; // Clonación Arreglos

// Arreglos
const arregloTodo = [1, '', true, null, new Date()];
const arregloNumeros: number[] = [1, 2, 3, 4, 5];
function funcionConNombre() {
}
const indice = arregloNumeros
    .findIndex(
        (numero) => { // Funcion Anonima xq no tiene nombre
            const elValorEsIgualAtres: boolean = numero === 3;
            return elValorEsIgualAtres  // Condicion -> boolean
        },
        // function () { -> Funcion Anonima xq no tiene nombre
        //
        // }
    );
arregloNumeros[indice] = 6
// agregar al final
arregloNumeros.push(6)
// agregar al principio
arregloNumeros.unshift(0)
// CONDICIONES -> Truty y Falsy
const numeroOrden = 0;
if (numeroOrden) {
  console.log('Truty');
} else {
  console.log('Falsy'); // FALSY
}
if (1) {
  console.log('Truty'); // TRUTY
} else {
  console.log('Falsy');
}
if (-1) {
    console.log('Truty'); // TRUTY
} else {
    console.log('Falsy');
}
if ("") {
    console.log('Truty');
} else {
    console.log('Falsy'); // FALSY
}
if ("a") {
    console.log('Truty'); // TRUTY
} else {
    console.log('Falsy');
}
if ({}) {
    console.log('Truty');
} else {
    console.log('Falsy'); // FALSY
}
if ({a:1}) {
    console.log('Truty'); // TRUTY
} else {
    console.log('Falsy');
}
if ([]) {
    console.log('Truty');
} else {
    console.log('Falsy'); // FALSY
}
if ([1]) {
    console.log('Truty');// TRUTY
} else {
    console.log('Falsy');
}
if (null) {
    console.log('Truty');
} else {
    console.log('Falsy'); // FALSY
}
if (undefined) {
    console.log('Truty');
} else {
    console.log('Falsy'); // FALSY
}
*/
