import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsAndIndicatorsComponent } from './components/buttons-and-indicators/buttons-and-indicators.component';
import { CssClassesComponent } from './components/css-classes/css-classes.component';
import { FormsComponent } from './components/forms/forms.component';


const routes: Routes = [
  { path: 'buttons-and-indicators', component: ButtonsAndIndicatorsComponent },
  { path: 'css-classes', component: CssClassesComponent },
  { path: 'forms', component: FormsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
