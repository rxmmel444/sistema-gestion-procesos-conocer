import { Component } from '@angular/core';
import { MainNavbar } from '../../organisms/main-navbar/main-navbar';
import { ComunicadosPanel } from '../../organisms/comunicados-panel/comunicados-panel';
import { UiLogo } from '../../atoms/ui-logo/ui-logo';
@Component({
  selector: 'app-home',
  imports: [
    MainNavbar,
    ComunicadosPanel,
    UiLogo
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
