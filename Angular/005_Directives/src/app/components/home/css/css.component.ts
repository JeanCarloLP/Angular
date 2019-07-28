import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styles: [`
    p {
      color: violet;
    }
  `]
})
export class CssComponent implements OnInit {

  var1 = `p {
    color: violet;
  }`;
  constructor() { }

  ngOnInit() {
  }

}
