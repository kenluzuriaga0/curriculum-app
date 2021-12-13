import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.page.html',
  styleUrls: ['./educacion.page.scss'],
})
export class EducacionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public educacion=[
    {
      nombre:"UNIVERSIDAD DE GUAYAQUIL",
      periodo:"2019-2024",
      titulo:"Cursando 6to Semestre Ing Sistemas",
      tipo :"Educacion Profesional"
    },
    {
      nombre:"UNIDAD EDUCATIVA CRISTÓBAL COLÓN",
      periodo:"2012-2018",
      titulo:"Bachiller General Unificado",
      tipo :"Educacion Secundaria"
    },
    {
      nombre:"MI PEQUEÑO CIELO",
      periodo:"2006-2012",
      titulo:"",
      tipo :"Educacion Primaria"
    }
  ];
}
