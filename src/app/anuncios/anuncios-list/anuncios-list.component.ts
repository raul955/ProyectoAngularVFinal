import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../anuncio.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-anuncios-list',
  templateUrl: './anuncios-list.component.html',
  styleUrls: ['./anuncios-list.component.css']
})
export class AnunciosListComponent implements OnInit {

  anuncios: any;

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.getAnunciosList();
  }

  //Métodos para listar y borrar los anuncios.
  getAnunciosList() {
    this.anuncioService.getAnunciosList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(anuncios => {
      this.anuncios = anuncios;
    });
  }

  deleteAnuncios() {
    this.anuncioService.deleteAll().catch(err => console.log(err));
  }

}
