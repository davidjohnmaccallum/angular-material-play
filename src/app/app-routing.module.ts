import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsAndIndicatorsComponent } from './components/buttons-and-indicators/buttons-and-indicators.component';


const routes: Routes = [
  { path: 'buttons-and-indicators', component: ButtonsAndIndicatorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
