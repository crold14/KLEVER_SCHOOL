import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../Services/alumnos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private alumnosService: AlumnosService
  ) { }

  ngOnInit(): void {
  }

}
