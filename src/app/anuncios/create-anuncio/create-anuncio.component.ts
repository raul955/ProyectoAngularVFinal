import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { Anuncio } from '../anuncio';
import { AnuncioService } from '../anuncio.service';

@Component({
  selector: 'app-create-anuncio',
  templateUrl: './create-anuncio.component.html',
  styleUrls: ['./create-anuncio.component.css']
})
export class CreateAnuncioComponent implements OnInit {

  anuncio: Anuncio = new Anuncio();
  submitted = false;

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit() {
  }

  //Métodos que crean y guardan el anuncio.
  newAnuncio(): void {
    this.submitted = false;
    this.anuncio = new Anuncio();
  }

  save() {
    this.anuncioService.createAnuncio(this.anuncio);
    this.anuncio = new Anuncio();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
