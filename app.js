/*'use strict';*/


class Animal {   //clase

    especie;
    edad;
    color;

    constructor(/*especie, edad, color*/) {
        this.especie = null;
        this.edad = null;
        this.color = null;
        
    }

    set Especie(newName){        //Propiedades
        this.especie = newName;
    }
    get Especie(){
        return this.especie;
    }

    set Edad(newEdad) {
        this.edad = newEdad;
    }
    get Edad() {
        return this.edad;
    }

    set Color(newColor) {
        this.color = newColor;
    }
    get Color() {
        return this.color;
    }

    verInfo(){

        /*return `mi raza es ${Animal.especie} <br> edad: ${Animal.edad} <br> color: ${Animal.color}`;*/
        return document.write(`Especie: ${this.Especie} <br> Edad: ${this.Edad} <br> Color: ${this.Color} <br>`);
    }


}

let perro = new Animal();
//Perro.especie = "perro";
perro.edad = 7;
perro.color = "Marron";
perro.especie = "Perro";
perro.verInfo();



class Perro extends Animal { // Herencia

    raza;
    
    constructor(especie, edad, color) { 
        super(especie, edad, color);
        this.raza = null;
    }

    set Raza(newName){
        this.raza = newName;
    }

    get Raza() {
        return this.raza
    }

    info() {
        return document.write(`Especie: ${this.Especie} <br> Raza: ${this.Raza} <br> Edad: ${this.Edad} <br> Color: ${this.Color} `);
    }

}

document.write("------------------------ objeto con herencia en Js------------------ <br>")

let perro1 = new Perro();
perro1.Color = "Negro";
perro1.Edad = 3;
perro1.Especie = "Perro";
perro1.Raza = "BorderColie"

perro1.info();

document.write("<br> -------------- m�todos de cadenas ----------------- <br>")

var texto = `
.concat(x); es un metodo que sirve para concatenar cadenas.. de la misma manera que seria cuando sumamos dos string o un string y un entero (el resultado es string) <br>
.startsWith(x); es true si comienza con la cadena que pasamos por parametro <br>
.endWith(x); es true si termina con la cadena que pasamos por parametro <br>
.includes(x); es true si la cadena que le pasamos por parametro esta (no importa en que parte del texto, si existe es true) <br>
.indexOf(x);  nos va a devolver (contando) un numero, que es la posicion en la que se encuentra la primera letra del elementro buscado <br>
.lastIndexOf(x); igual a la anterior pero si el elemento buscado esta repetido, nos dira la posicion del ultimo repetido en la cadena y no del primero que encuentre <br>
.repeat(x); repite la cadena tantas veces como le indiquemos por parametro <br>
.split(,); divide los valores con lo que le pasamos como parametro. por ej let ejemplo = hola como estas?; emeplo.split("como"); document.write(ejemplo[0]); devuelve hola.- document.write(ejemplo[1]); devuelve estas <br>
.substring(0,10); devuelve lo que contiene la cadena entre el rango que le indiquemos  <br>
.toLowerCase(); pasa toda la cadena a minuscula  <br>
.toUpperCase(); pasa toda la cadena a mayuscula  <br>
.toString(); convierte la cadena a string  <br>
.trim(); elimina los espacios en la cadena  <br> 
.trimEnd(); Elimina los espacios del final de la cadena  <br>
.trimStart(); Elimina los espacios en el comienzo de la cadena  <br>




`;



document.write(texto);