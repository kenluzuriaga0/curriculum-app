import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.page.html',
  styleUrls: ['./experiencia.page.scss'],
})
export class ExperienciaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public experiencias = [
    {
      nombre: "MediLink S.A",
      cargo: "Programador Junior",
      tiempo: "3 años y 7 meses",
      funciones: [
        "Manejo avanzado de tablas dinámicas en excel",
        "Funciones de búsqueda y texto en excel",
        "Creación de macros con VBA",
        "Desarrollo de aplicaciones Desktop y Web en JAVA (Swing-JSF-Spring Boot)",
        "Help Desk: Compartir Impresoras, Formateo de Pc, Instalación de software y SO"
      ],
    }
  ];
}