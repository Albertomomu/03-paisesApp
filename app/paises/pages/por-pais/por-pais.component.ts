import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];

  constructor( private paisesService: PaisesService ) { }

  buscar( termino: string ) {
    
    this.hayError = false;
    this.termino  = termino;

    this.paisesService.buscarPais( termino )
      .subscribe( (paises) => {
        this.paises = paises;
        
      }, (err) => {
        this.hayError = true;
        this.paises   = [];
      });

  }

  sugerencias(termino: string){

    this.hayError = false;
    

  }

}
