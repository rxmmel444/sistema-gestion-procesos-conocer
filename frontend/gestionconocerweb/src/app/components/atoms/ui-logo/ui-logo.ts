import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-logo',
  imports: [],
  templateUrl: './ui-logo.html',
  styleUrl: './ui-logo.scss',
})
export class UiLogo {


  @Input() src = 'assets/images/logo-conocer.png';
  @Input() alt = 'Logo CONOCER';
}
