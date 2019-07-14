import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true ): any {
    if (activar) {
      let salida = '';
      for ( let index of value ) {
        index += 1;
        salida += '*';
      }
      return salida;
    } else {
      return value;
    }
  }
}
