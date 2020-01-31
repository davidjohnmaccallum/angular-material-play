import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './modules/material.module';
import { ButtonsAndIndicatorsComponent } from './components/buttons-and-indicators/buttons-and-indicators.component';
import { CssClassesComponent } from './components/css-classes/css-classes.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { InputComponent } from './components/input/input.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsAndIndicatorsComponent,
    CssClassesComponent,
    FormFieldComponent,
    InputComponent,
    DatepickerComponent,
    CheckboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
