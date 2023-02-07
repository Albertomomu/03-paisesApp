import { Component } from '@angular/core';

import { PaisesService } from '../../services/paises.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent {

  pais!: Country;
  idioma!: any;

  constructor( private activatedRoute: ActivatedRoute, private paisService: PaisesService) { }


  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisService.verPais(id))
    )
    .subscribe(pais => {
      this.pais = pais;
    })

  }
}
