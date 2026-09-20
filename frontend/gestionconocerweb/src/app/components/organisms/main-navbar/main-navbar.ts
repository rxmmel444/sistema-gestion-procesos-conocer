import { Component } from '@angular/core';
interface MenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-main-navbar',
  imports: [],
  templateUrl: './main-navbar.html',
  styleUrl: './main-navbar.scss',
})
export class MainNavbar {


  menuItems: MenuItem[] = [
    { label: 'Cancelar Procesos', route: '#' },
    { label: 'Cancelar Proceso Cruzado', route: '#' },
    { label: 'Asignar Verificador Externo', route: '#' },
    { label: 'Asignar Cedula', route: '#' },
    { label: 'Reportes', route: '#' },
  ];
}
