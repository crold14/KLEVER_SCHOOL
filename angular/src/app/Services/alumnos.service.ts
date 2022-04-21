import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Alumno } from '../interfaces/alumnos.interfaces';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  baseUrl: string;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {

    this.baseUrl = 'http://localhost:3000/api'

  }
  getALL() {
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + '/alumnos'))
  }
  newAlumno(pNewAlumno: Alumno) {
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + '/alumnos/registro', pNewAlumno))
  }
  deleteAlumno(pIdUser: number) {
    return firstValueFrom(this.httpClient.delete<any>(this.baseUrl + `/alumnos/${pIdUser}`))
  }
  modifyAlumno(pIdUser: any, pNewData: any) {
    return firstValueFrom(this.httpClient.put<any>(this.baseUrl + '/alumnos/' + pIdUser, pNewData))
  }
}
