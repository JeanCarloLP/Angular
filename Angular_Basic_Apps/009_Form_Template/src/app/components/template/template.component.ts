import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      box-shadow: 0 0 3px red;
    }
    .ng-valid.ng-touched:not(form){
      box-shadow: 0 0 3px green;
    }
  `]
})
export class TemplateComponent implements OnInit {

  user: any = {
    name: null,
    surname: null,
    email: null,
    country: '',
    gender: 'Man',
    accept: false
  };

  countries = [
    {
      code: 'BE',
      name: 'Belgium'
    },
    {
      code: 'SP',
      name: 'Spain'
    }
  ];

  genders: string[] = ['Man', 'Woman', 'Not defined'];

  constructor() { }

  ngOnInit() {
  }

  save( formTemplate: NgForm ) {
    console.log( 'NgForm', formTemplate );
    console.log( 'Value', formTemplate.value );
    console.log( 'User', this.user );
  }

}
