import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, todas: boolean = true ): string {
        // usamos el operador rest para meter los argumentos en un array
        // {{ nombre2 | capitalizado:arg1:arg2:arg3}}
        //
        // transform(value: string, ...args: any[]): string {
        // una forma alternativa al array serían especificar los argumentos
        // transform(value: string, arg1, arg2, arg3): string {

        value = value.toLowerCase();
        const nombres = value.split(' ');
        if (todas) {
            for (const i in nombres) {
                if (nombres.hasOwnProperty(i)) {
                    // queremos que de cada palabra su primera letra [i][0] sea mayusculas
                    nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
                }
            }
        } else {
            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1);
        }
        return nombres.join(' ');
    }
}
