"use strict";
// Variables
var mensaje = "hola";
if (true) {
    var mensaje = "adios";
}
console.log(mensaje);
var nuevo_mensaje = "hola otra vez";
if (true) {
    var nuevo_mensaje_1 = "adios otra vez";
}
console.log(nuevo_mensaje);
// CONSTANTES
var OBSERVACIONES = "todas";
if (true) {
    var OBSERVACIONES_1 = "ninguna";
}
console.log(OBSERVACIONES);
//RECUERDA : ----------------------------------------
var nombre = "Pedro";
var numero = 123;
var booleano = false;
var fecha = new Date();
fecha = new Date('2020-02-02');
console.log(fecha);
// existe un tipo de dato flexible para usarlo como comodín
var cualquiera;
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = fecha;
console.log(cualquiera);
//LITERALES
var nuevoNombre = "Pedro";
var apellido = "González";
var edad = 32;
console.log("Hola me llamo " + nuevoNombre + " " + apellido + " y tengo " + edad + " a\u00F1os");
//todo lo  que va dentro de ${ } es javascript puro OJO!!!! no es JQuery
function getNombre() {
    return "Alfredo González";
}
console.log("Hola me llamo " + getNombre());
// FUNCIONES CON PARAMETROS OPCIONALES
// el primer parámetro no puede ser opcional
// si el tercer parámetro es opcional el segundo es obligatorio
function activar(quien, objeto, momento) {
    var mensaje;
    if (momento) {
        mensaje = "El comisario " + quien + " activ\u00F3 la " + objeto + " de alarma " + momento + ".";
    }
    else {
        mensaje = "El comisario " + quien + " activ\u00F3 la " + objeto + " de alarma.";
    }
    console.log(mensaje);
}
activar("Javier", "sirena", "tarde");
activar("Javier", "señal");
// FUNCIONES DE FLECHA ES5 - ES6
var miFuncion = function (nombreParametro) {
    return nombreParametro;
};
var miFuncionFlecha = function (nombreParametro2) { return nombreParametro2; };
var miNuevaFuncion = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miNuevaFuncionFlecha = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(miNuevaFuncion("pedro"));
console.log(miNuevaFuncion("jacinto"));
var hulk = {
    nombre: "Bruce Banner",
    smash: function () {
        setTimeout(function () {
            console.log(this.nombre + "smash!!!");
            //coge la variable global nombre ya definida
            //this está apuntando al objeto global window y nombre ya se definió previamente 
        }, 1500);
    }
};
hulk.smash();
var hulk2 = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + "smash!!!"); }, 1500);
        //con una función de flecha this está en el mismo ambito por lo que this es el objeto en sí mismo
    }
};
hulk2.smash();
