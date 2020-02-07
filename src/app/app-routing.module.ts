import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsAndIndicatorsComponent } from './components/buttons-and-indicators/buttons-and-indicators.component';
import { CssClassesComponent } from './components/css-classes/css-classes.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { InputComponent } from './components/input/input.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { SelectComponent } from './components/select/select.component';
import { SliderComponent } from './components/slider/slider.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

const routes: Routes = [
  { path: 'buttons-and-indicators', component: ButtonsAndIndicatorsComponent },
  { path: 'css-classes', component: CssClassesComponent },
  { path: 'form-field', component: FormFieldComponent },
  { path: 'input', component: InputComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'radio-button', component: RadioButtonComponent },
  { path: 'select', component: SelectComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'slide-toggle', component: SlideToggleComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: '', redirectTo: '/form-field', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
