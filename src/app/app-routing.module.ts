import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrutaComponent} from './components/fruta/fruta.component';
import {EmpleadosComponent} from './components/empleados/empleados.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  {path: 'fruta', component: FrutaComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'empleados/:nombre', component: EmpleadosComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
