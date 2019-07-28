import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styles: []
})
export class NgStyleComponent implements OnInit {

  // ngStyle *************************************
  tamano = 1;
  tamano2 = 1;
  var1 = `<p [ngStyle] = " { 'font-size': tamano + 'em'} "></p>`;
  var2 = `tamano = 1`;
  var3 = `<p [style.fontSize]="'1em'">`;
  var4 = `Alternativa: <p [style.fontSize.em]="tamano"> `;
  // *********************************************
  constructor() { }

  ngOnInit() {
  }

}
