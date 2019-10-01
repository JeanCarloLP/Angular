import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {
  alerta = 'warning';
  variable = `
    <div [ngSwitch]="alerta">
      <div *ngSwitchCase="'danger'"
      class="alert alert-danger"
      role="alert">
          This is a danger alert—check it out!
      </div>
      <div *ngSwitchCase="'info'"
      class="alert alert-info"
      role="alert">
          This is a info alert—check it out!
      </div>
      <div *ngSwitchCase="'success'"
      class="alert alert-success"
      role="alert">
          This is a success alert—check it out!
      </div>
      <div *ngSwitchDefault
      class="alert alert-warning"
      role="alert">
          This is a warning alert—check it out!
      </div>

      <button class="btn btn-primary"
      type="button" name="button"
      (click)="alerta = 'success'">
          Cambiar Alerta
      </button>
    </div>
  `;

  constructor() { }

  ngOnInit() {
  }

}
