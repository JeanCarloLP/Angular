import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormArray, ControlContainer} from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

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
    hobbies: []
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
      // hobbies: this.set_Array(this.user.hobbies)
      hobbies: new FormArray([
        new FormControl('', Validators.required),
      ]),

      // async validator
      userName: new FormControl('', Validators.required, this.checkUser),

      password: new FormControl('', Validators.required),
      passwordCheck: new FormControl(),
     });

    // this.form.setValue( this.user );
    // this.form.reset( this.user );

    // tslint:disable-next-line:no-string-literal
    this.form.controls['passwordCheck'].setValidators([
      Validators.required,
      this.checkPassword.bind(this.form)
    ]);

    // if you need to subscribe to any change on the form data just do as follows
    // this.form.valueChanges.subscribe(
    //   data => {
    //     console.log( data );
    //   }
    // );

    // if you need to hear only one element of the form, do as follows
    // e.g. userName
    // tslint:disable-next-line:no-string-literal
    // this.form.controls['userName'].valueChanges.subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // );

    // if you need to hear about the status of one element of the form, do as follows
    // e.g. userName
    // tslint:disable-next-line:no-string-literal
    // this.form.controls['userName'].statusChanges.subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // );
  }

  addHobby() {
    (this.form.controls.hobbies as FormArray).push(
      new FormControl('', Validators.required)
    );
  }

  checkPassword( control: FormControl ): { [s: string]: boolean } {
    const form: any  = this;
    // tslint:disable-next-line:no-string-literal
    if ( control.value !== form.controls['password'].value ) {
      return {
        nomatch: true
      };
    }
    return null;
  }

  saveForm() {
    console.log( this.form.value );
    console.log( this.form );
  }

  set_Array( hobbies: any ) {
    const arrayForm = new FormArray([]);
    for ( const entry of hobbies ) {
      const group = new FormGroup({
        hobby: new FormControl(entry, Validators.required)
      });
      arrayForm.push(group);
    }
    return arrayForm;
  }

  // Lets check if after a few seconds we can use the user name setted
  checkUser( control: FormControl ): any {
    const userNameChecked = new Promise(
      ( resolve, reject ) => {
        setTimeout( () => {
          if ( control.value === 'test' ) {
            resolve ( {exists: true} );
          } else {
            resolve( null) ;
          }
        }, 3000 );
      }
    );

    return userNameChecked;
  }

}
