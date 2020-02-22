import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../anuncio.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-anuncios-list',
  templateUrl: './anuncios-list2.component.html',
  styleUrls: ['./anuncios-list2.component.css']
})
export class AnunciosList2Component implements OnInit {

  anuncios: any;

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.getAnunciosList();
  }

  //Métodos para obtener anuncios y borrarlos..
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
