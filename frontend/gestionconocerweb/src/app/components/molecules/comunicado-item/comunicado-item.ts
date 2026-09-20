import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comunicado-item',
  imports: [],
  templateUrl: './comunicado-item.html',
  styleUrl: './comunicado-item.scss',
})
export class ComunicadoItem {


  @Input() titulo = '';
   @Input()  textoLink = 'haciendo click aqui';
}
