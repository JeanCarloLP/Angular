// Variables
var mensaje = "hola";
if(true){
    var mensaje = "adios";
}
console.log(mensaje);

let nuevo_mensaje = "hola otra vez";
if(true){
    let nuevo_mensaje = "adios otra vez";
}
console.log(nuevo_mensaje);

// CONSTANTES
const OBSERVACIONES = "todas";
if(true){
    const OBSERVACIONES = "ninguna";
}
console.log(OBSERVACIONES);


//RECUERDA : ----------------------------------------

let nombre:string = "Pedro";
let numero:number = 123;
let booleano:boolean = false;
let fecha:Date = new Date();
fecha = new Date('2020-02-02');
console.log(fecha);

// existe un tipo de dato flexible para usarlo como comodín
let cualquiera:any;

cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = fecha;

console.log(cualquiera);


//LITERALES
let nuevoNombre:string = "Pedro";
let apellido:string = "González";
let edad:number = 32;

console.log(`Hola me llamo ${ nuevoNombre } ${ apellido } y tengo ${ edad } años`)
//todo lo  que va dentro de ${ } es javascript puro OJO!!!! no es JQuery

function getNombre(){
    return "Alfredo González";
}
console.log(`Hola me llamo ${ getNombre() }`)



// FUNCIONES CON PARAMETROS OPCIONALES
// el primer parámetro no puede ser opcional
// si el tercer parámetro es opcional el segundo es obligatorio
function activar( quien:string, objeto:string, momento?:string){
    let mensaje:string;
    if(momento){
        mensaje = `El comisario ${ quien } activó la ${ objeto } de alarma ${ momento }.`
    }else{
        mensaje = `El comisario ${ quien } activó la ${ objeto } de alarma.`
    }
    console.log(mensaje);
}
activar("Javier", "sirena", "tarde");
activar("Javier", "señal");

// FUNCIONES DE FLECHA ES5 - ES6
let miFuncion = function( nombreParametro: string ) {
    return nombreParametro;
}

let miFuncionFlecha = (nombreParametro2:string) => nombreParametro2;

let miNuevaFuncion = function( nombre:string ){
    nombre = nombre.toUpperCase();
    return nombre;
}

let miNuevaFuncionFlecha = (nombre:string) => {
    nombre = nombre.toUpperCase();
    return nombre;
}

console.log(miNuevaFuncion("pedro"));
console.log(miNuevaFuncion("jacinto"));

let hulk = {
    nombre: "Bruce Banner",
    smash(){
        setTimeout(function (){
            console.log(this.nombre + "smash!!!");
            //coge la variable global nombre ya definida anteriormente
            //this está apuntando al objeto global window y nombre ya se definió previamente 
        }, 1500)
    }
}

hulk.smash();

let hulk2 = {
    nombre: "Hulk",
    smash(){
        setTimeout( () => console.log( this.nombre + "smash!!!" ) , 1500 );
        //con una función de flecha this está en el mismo ambito por lo que this es el objeto en sí mismo
    }
}
hulk2.smash();