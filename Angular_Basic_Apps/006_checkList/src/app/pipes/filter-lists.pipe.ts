import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'filterLists',
  pure: false
})
export class FilterListsPipe implements PipeTransform {

  transform( checkLists: List[], finished: boolean = true ): List[] {
    return checkLists.filter( list => list.accomplished === finished );
  }

}
