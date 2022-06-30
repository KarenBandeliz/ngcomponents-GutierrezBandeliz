import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  show:boolean = false;
  showtitle:string = "";
  Lista = [
    {id: 1, nombre:'Karen', calificacion: 10},
    {id: 2, nombre:'José', calificacion: 8},
    {id: 5, nombre:'Omar', calificacion: 9},
    {id: 3, nombre:'Iván', calificacion: 7},
    {id: 4, nombre:'Giselle', calificacion: 10},
    {id: 5, nombre:'Ramsés', calificacion: 8},
    {id: 6, nombre:'Raúl', calificacion: 5},
    {id: 7, nombre:'Nathaly', calificacion: 6},
    {id: 8, nombre:'Josué', calificacion: 5},
    {id: 9, nombre:'Amelie', calificacion: 10},
    {id: 10, nombre:'Carlos', calificacion: 4}

  ];

  lista = this.Lista;
  constructor() { }

  ngOnInit() {
    
  }
  Aprobado(){
    this.show = true;
    this.showtitle = "Aprobado, felicidades"

  }
  Reprobado(){
    this.showtitle = "Reprobado, estudia más"
    this.show = false;
  }

}