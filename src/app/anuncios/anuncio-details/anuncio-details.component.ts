import { Component, OnInit, Input } from '@angular/core';
import { AnuncioService } from '../anuncio.service';
import { Anuncio } from '../anuncio';

@Component({
  selector: 'app-anuncio-details',
  templateUrl: './anuncio-details.component.html',
  styleUrls: ['./anuncio-details.component.css']
})
export class AnuncioDetailsComponent implements OnInit {

  @Input() anuncio: Anuncio;

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit() {
  }

  //Métodos para modificar el estado del anuncio y para borrarlos
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
