import { Component } from '@angular/core';
import { FormControl, Validators, ValidationErrors, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  favoriteFood = new FormControl('', [
    Validators.required
  ]);

  formGroup = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
  });

  getError(formControlName) {

    const errorMessages = {
      email: 'Invalid email address',
      required: 'This field is required',
    };

    const formControl = this.formGroup.controls[formControlName];
    if (!formControl) { return; }
    const errors = formControl.errors;
    if (!errors) { return; }
    const keys = Object.keys(errors);
    if (!keys.length) { return; }
    const errorKey = keys[0];
    return errorMessages[errorKey];

  }

}
