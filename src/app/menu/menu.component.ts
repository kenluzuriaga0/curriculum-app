import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public appPages = [
    { title: 'Información', url: '/info', icon: 'pencil' },
    { title: 'Experiencia', url: '/experiencia', icon: 'paper-plane' },
    { title: 'Educación', url: '/educacion', icon: 'archive' },
    { title: 'Habilidades', url: '/skills', icon: 'heart' },
  ];
  public referencias = [
    { nombre: 'Gustavo Cires', correo: 'gcires@gmail.com', celular: '+593 99 022 6189' },
    { nombre: 'Luis Velasco', correo: 'lvelasco@medilink.com.ec', celular: '+593 99 022 6189' },
    { nombre: 'Gustavo Montalvo', correo: 'gmontalvo@medilink.com.ec', celular: '+593 99 022 6189' }
  ];
  constructor() { }

  ngOnInit() { }

}
