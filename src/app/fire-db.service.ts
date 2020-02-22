import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireDbService {

  constructor(private db: AngularFireDatabase) { }

  //Servicio para la gestión de usuarios en la Real Time Database de firebase, independiente de la herramienta de autentificación de Firebase,
  //ya que almaceno aparte los usuarios en la bbdd
  updateUserData(user: any) {
    console.log('users: ' + user);
    const path = 'users/' + user.uid;
    const u = {
      email: user.email
    }
    this.db.object(path).update(u).catch(error => console.log(error));
  }

  getUsers() {
    const path = 'users/';
    return this.db.list(path).snapshotChanges();
  }

  removeUser(userUid) {
    const path = 'users/' + userUid;
    return this.db.object(path).remove();
  }

/*******************************************************/

//unused métodos
updateItemData(item: any) {
  console.log('items: ' + item);
  const path = 'items/' + item.uid;
  const u = {
    email: item.email,
    titulo: item.titulo,
    descripcion: item.descripcion,
    imagen: item.imagen,
    precio: item.precio
  };
  this.db.object(path).update(u).catch(error => console.log(error));
}

getItems() {
  const path = 'items/';
  return this.db.list(path).snapshotChanges();
}

removeItem(itemUid) {
  const path = 'items/' + itemUid;
  return this.db.object(path).remove();
}

}
