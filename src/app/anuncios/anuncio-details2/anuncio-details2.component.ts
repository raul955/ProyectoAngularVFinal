import { Component, OnInit, Input } from '@angular/core';
import { AnuncioService } from '../anuncio.service';
import { Anuncio } from '../anuncio';

@Component({
  selector: 'app-anuncio-details2',
  templateUrl: './anuncio-details2.component.html',
  styleUrls: ['./anuncio-details2.component.css']
})
export class AnuncioDetails2Component implements OnInit {

  @Input() anuncio: Anuncio;

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit() {
  }

  //Métodos para updatear el estado del anuncio y borrarlo, no se usan en esta sección.
  updateActive(isActive: boolean) {
    this.anuncioService
      .updateAnuncio(this.anuncio.key, { active: isActive })
      .catch(err => console.log(err));
  }

  deleteAnuncio() {
    this.anuncioService
      .deleteAnuncio(this.anuncio.key)
      .catch(err => console.log(err));
  }

}
