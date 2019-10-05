import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistsComponent } from './checklists/checklists.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    ChecklistsComponent
  ],
  exports: [
    ChecklistsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
