import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from '../interfaces/alumnos.interfaces';
import { AlumnosService } from '../Services/alumnos.service';

@Component({
  selector: 'app-modifica-alumno',
  templateUrl: './modifica-alumno.component.html',
  styleUrls: ['./modifica-alumno.component.css']
})
export class ModificaAlumnoComponent implements OnInit {

  formulario: FormGroup;
  idUser: number

  constructor(
    private alumnosService: AlumnosService,
    private router: Router,
    private actidatedRoute: ActivatedRoute
  ) {
    this.formulario = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/),
      ]),
      Full_name: new FormControl('', [
        Validators.required
      ]),
    }),
      this.idUser = 0
  }

  ngOnInit(): void {


  }

  onSubmit() {
    this.actidatedRoute.params.subscribe((params) => {
      this.idUser = parseInt(params['idUser']);
      const response = this.alumnosService.modifyAlumno(params['idUser'], this.formulario.value)
      alert('Alumno modificado')

      this.router.navigate(['/alumnos'])


    })

  }


}
