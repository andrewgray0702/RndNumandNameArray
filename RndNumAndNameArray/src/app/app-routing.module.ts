import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RndNumberComponent } from './rnd-number/rnd-number.component';
import { NameArrayComponent } from './name-array/name-array.component';

const routes: Routes = [
  {path: 'rnd-number', component: RndNumberComponent},
  {path: 'name-form', component: NameArrayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
