import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from '../interfaces/alumnos.interfaces';
import { AlumnosService } from '../Services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  arrAlumnos: Alumno[]
  response: any

  constructor(
    private alumnosService: AlumnosService,
    private router: Router
  ) {

    this.arrAlumnos = []
    this.response = null
  }

  async ngOnInit() {
    let response = await this.alumnosService.getALL()
    this.arrAlumnos = response;


  }

  async onClick(pID: number) {
    const response = await this.alumnosService.deleteAlumno(pID)
    alert('Se ha eliminado el alumno')
    this.router.navigate(['/home'])


  }
}
