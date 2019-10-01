import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: []
})
export class NgClassComponent implements OnInit {

  alerta = 'alert-danger';
  propiedades = {
    danger: false
  };

  var1 = `
  <td>
      <div [ngClass]="alerta" class="alert" role="alert">
          This is a {{alerta}} check it out!
      </div>
      <button class="btn btn-info m-1" (click)="alerta = 'alert-info'">Info</button>
      <button class="btn btn-success m-1" (click)="alerta = 'alert-success'">Success</button>
      <button class="btn btn-danger m-1" (click)="alerta = 'alert-danger'">Danger</button>
  </td>
  `;

  var2 = `
  <h3 [ngClass] = " { 'text-danger': propiedades.danger, 'text-info': !propiedades.danger }">Hola Mundo</h3>
  <br/>
  <button
      (click)="cambiarPropiedades()"
      type="button" name="button"
      class="btn"
      [ngClass]=" { 'btn-danger': propiedades.danger, 'btn-info': !propiedades.danger }">
      Cambiar
  </button>
  `;

  var3 = `
    propiedades = {
      danger: false
    };
    cambiarPropiedades() {
      this.propiedades.danger = !this.propiedades.danger;
    }
  `;

  var4 = `<i class="fa" [ngClass]=" { 'fa-save':!loading, 'fa-refresh fa-spin':loading } "></i>`;
  var5 = `
  ejecutar() {
    this.loading = true;
    setTimeout(
      () => this.loading = false, 2000
    );
  }
  `;
 var6 = `
   constructor( private elementRef: ElementRef) {}

   @HostListener('mouseenter') ratonEncima() {
     this.elementRef.nativeElement.style.backgroundColor = 'yellow';
   }

   @HostListener('mouseleave') ratonFuera() {
     this.elementRef.nativeElement.style.backgroundColor = null;
   }
  `;
  loading = false;

  constructor() { }

  ngOnInit() {
  }

  cambiarPropiedades() {
    this.propiedades.danger = !this.propiedades.danger;
  }

  ejecutar() {
    this.loading = true;
    setTimeout(
      () => this.loading = false, 2000
    );
  }
}
