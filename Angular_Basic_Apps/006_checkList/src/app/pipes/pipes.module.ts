import { NgModule } from '@angular/core';
import { FilterListsPipe } from './filter-lists.pipe';

@NgModule({
  declarations: [FilterListsPipe],
  exports: [FilterListsPipe]
})
export class PipesModule { }
