import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { ModificaAlumnoComponent } from './modifica-alumno/modifica-alumno.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'alumnos/new', component: FormularioComponent },
  { path: 'alumnos/:idUser', component: ModificaAlumnoComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
