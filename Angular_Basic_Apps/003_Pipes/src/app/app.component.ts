import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  contrasena = `!236sdfbJasdfbn_#sfb`;
  activar = true;
  varContrasena = `{{ variable | customPipePassword }}`;
  fecha = new Date();
  nombre = 'Jean Carlo';
  nombre2 = 'jeancarlo león PregunTeguI';
  PI = Math.PI;
  porcentaje = 0.234;
  porcentaje2 = 0.23948754;
  salario = 1234567890.5;
  title = 'Pipes';
  varArray3 = '{{ array | slice:3 }}';
  varArray37 = '{{ array | slice:3:7 }}';
  varFecha = '{{ variable | date }}';
  varFecha1 = `{{ fecha | date:'dd/MM/yyyy' }}`;
  varFecha2 = `{{ fecha | date:'dd - MMMM - yyyy' }}`;
  varImportar1 = `import { registerLocaleData } from '@angular/common';`;
  varImportar2 = `import localeEs from '@angular/common/locales/es';`;
  varImportar3 = `registerLocaleData(localeEs, 'es');`;
  variableUppercase = '{{ variable | uppercase }}';
  variableLowercase = '{{ variable | lowercase }}';
  varSlice3 = '{{ variable | slice:3 }}';
  varSlice03 = '{{ variable | slice:0:3 }}';
  varNgFor = `<li *ngFor = "let item of array | slice:5:20 > {{ item }}`;
  varNumber = ` Queremos mostrar solo los 3 primeros enteros {{ PI | number: '3.0-0' }}`;
  varNumber2 = `1 entero y 2 decimales pero con la coma en vez del punto {{ PI | number: '1.0-2' }}`;
  varObjeto1 = 'hacemos uso de <pre> una etiqueta de presentación de bootstrap:';
  varObjeto2 = '<pre>{{ objeto | json }}</pre>';
  objeto = {
    propiedad1: 'Propiedad 1',
    propiedad2: 'Propiedad 2',
    propiedad3: 'Propiedad 3',
    propiedad4: 'Propiedad 4',
    propiedad5: {
      prop5_1: 'Propieded 5-1',
      prop5_2: 'Propieded 5-2',
      prop5_3: 'Propieded 5-3',
    }
  };
  varPi = '{{ PI | number }}';
  varPorcentaje = ` {{ variable | percent }}`;
  varPorcentaje2 = `Queremos modificar el formato a 2 enteros con 4 decimales
  atención con el redondeo {{ variable | percent:'2.2-4' }}`;
  varSalario = `{{ variable | currency }}`;
  varSalario2 = `Queremos mostrar euros en formato español {{ salario | number:'.0-2':'es' }} €`;
  varAsync = 'nos muestra un dato asincrono por ejemplo tras una promesa {{ variable | async }}';
  valorPromesa = new Promise (
    // tslint:disable-next-line:no-shadowed-variable
    ( resolve, reject) => {
      setTimeout(() => resolve('Llegaron los datos después de 4 segundos'), 4000);
    }
  );

  varPipePersonalizado = `{{ variable | pipPersonalizado}}`;
  // tslint:disable-next-line:max-line-length
  varPipePersonalizado2 = `{{ variable | pipPersonalizado:false}} pasamos el argumento false para que no se modifiquen todas las palabras, sólo la primera`;

  video = 'Il6p2-40-F0';
  variableYoutube = `[src]="variable | domseguro:'https://www.youtube.com/embed/'" `;
  variableYoutube1 = `Necesitamos insertar una url segura. En una url, Angular detecta como una vulneravilidad
    el insertar una url en una variable`;
  variableYoutube2 = `Revisar las importaciones necesarias en el pipe`;
  variableYoutube3 = `import { DomSanitizer } from '@angular/platform-browser';`;
  variableYoutube4 = `[...]`;
  variableYoutube5 = `return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );`;
}
