import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CapitalizadoPipe } from '../pipes/capitalizado/capitalizado.pipe';
import { registerLocaleData } from '@angular/common';
import { DomseguroPipe } from '../pipes/domseguro/domseguro.pipe';
import localeEs from '@angular/common/locales/es';
import { ContrasenaPipe } from '../pipes/contrasena/contrasena.pipe';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
