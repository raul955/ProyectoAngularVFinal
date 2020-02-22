import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Anuncio } from './anuncio';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  private dbPath = '/anuncio';

  //elemento AngularFireList donde se obtendrá la información de la bbdd y posteriormente se operará con él
  anunciosRef: AngularFireList<Anuncio> = null;

  constructor(private db: AngularFireDatabase) {
    this.anunciosRef = db.list(this.dbPath);
  }

  //Servicio con los métodos necesarios para la gestión de los anuncios
  createAnuncio(anuncio: Anuncio): void {
    this.anunciosRef.push(anuncio);
  }

  updateAnuncio(key: string, value: any): Promise<void> {
    return this.anunciosRef.update(key, value);
  }

  deleteAnuncio(key: string): Promise<void> {
    return this.anunciosRef.remove(key);
  }

  getAnunciosList(): AngularFireList<Anuncio> {
    return this.anunciosRef;
  }

  deleteAll(): Promise<void> {
    return this.anunciosRef.remove();
  }
}
