import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: []
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor() { }

}
