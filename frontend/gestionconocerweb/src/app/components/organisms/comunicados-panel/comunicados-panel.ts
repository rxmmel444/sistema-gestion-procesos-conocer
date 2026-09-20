import { Component } from '@angular/core';
import { ComunicadoItem } from '../../molecules/comunicado-item/comunicado-item';
interface Comunicado {
  titulo: string;
  textoLink: string;
}
@Component({
  selector: 'app-comunicados-panel',
  imports: [ComunicadoItem],
  templateUrl: './comunicados-panel.html',
  styleUrl: './comunicados-panel.scss',
})
export class ComunicadosPanel {

   comunicados: Comunicado[] = [
    {
      titulo: 'Información para emisión de certificados',
      textoLink: 'Descarga haciendo clic aquí'
    },
    {
      titulo: 'Cambio de datos del módulo administrativo SII',
      textoLink: 'Descarga haciendo clic aquí'
    },
    {
      titulo: 'Manuales COSU',
      textoLink: 'Consulta haciendo clic aquí'
    },
    {
      titulo: 'Cuotas del ejercicio 2026',
      textoLink: 'Descarga haciendo clic aquí'
    },
    {
      titulo: 'Accede al módulo de evaluación',
      textoLink: 'Haciendo clic aquí'
    }
  ];
}
