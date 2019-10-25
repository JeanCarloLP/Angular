import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormArray} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  form: FormGroup;

  user: any = {
    fullName: {
      name: null,
      surname: null
    },
    email: null,
    hobbies: [
      {
        id: '',
        hobby: ''
      },
      // {
      //   id: '2',
      //   hobby: 'movies'
      // }
    ]
  };

  constructor() {

    this.form = new FormGroup({

      fullName: new FormGroup({
        name: new FormControl(
          '',
          [
            Validators.required,
            Validators.minLength(2)
          ]),
        surname: new FormControl(
          '',
          [
            Validators.required,
            Validators.minLength(2)
          ]),
      }),
      email: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
        ]),
      hobbies: this.inicializar_Array(this.user.hobbies)
      // hobbies: new FormArray([
      //   new FormControl('', Validators.required),
      // ])
     });

    // this.form.setValue( this.user );
    // this.form.reset( this.user );
  }


  saveForm() {
    console.log( this.form.value );
    console.log( this.form );
  }

  addHobby() {
    (this.form.controls.hobbies as FormArray).push(
      new FormControl('', Validators.required)
    );
  }

  inicializar_Array( hobbies: any ) {
    const arrayForm = new FormArray([]);
    for ( const entry of hobbies ) {
      const group = new FormGroup({
        id: new FormControl(entry.id),
        hobby: new FormControl(entry.hobby)
      });
      arrayForm.push(group);
    }
    return arrayForm;
  }
}
