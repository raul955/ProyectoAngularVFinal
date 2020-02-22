import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { FireDbService } from './fire-db.service';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email = '';
  pass = '';
  
  constructor(public auth: AngularFireAuth, private router: Router, private db:FireDbService) { }

  user = this.auth.authState.pipe (map(authState => {
    console.log('authState: ', authState);
    if (authState) {
      return authState;
    } else {
      return null;
    }
  }));

  //métodos del módulo AngularFireAuth para la gestión de usuarios en FireBase

  //método correspondiente al login con email de la aplicación
  login() {
    console.log('login!');
    this.auth.auth.signInWithEmailAndPassword(this.email, this.pass)
    .then(user => {
      console.log('user logado con email: ', user);
      this.email = '';
      this.pass = '';
      this.db.updateUserData(user.user);
    })
    .catch(error => {
      console.log('Error: ', error.code);
      if(error.code==='auth/wrong-password'){
        //alert('Contraseña no válida');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Contraseña no válida',
        })
      }else if(error.code==='auth/invalid-email'){
        //alert('Email inválido');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email inválido',
        })
      }else if(error.code==='auth/user-not-found'){
        //alert('Error usuario no válido');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error usuario no válido',
        })
      }
    });
  }

  //Método correspondiente al registro de la aplicación, 
  register(){
    this.auth.auth.createUserWithEmailAndPassword(this.email,this.pass)
    .then(result => {
      window.alert("Usuario Creado");
      this.router.navigate(['anunciosUsuarios']);
    })
    .catch(error =>{
      console.log('Error: ', error.code);
      if(error.code==='auth/invalid-email'){
        //alert('Email inválido');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email inválido',
        })
      }else if(error.code === "auth/weak-password"){
        //alert('La contraseña es muy débil, debe tener como mínimo 6 caracteres.')
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'La contraseña es muy débil, debe tener como mínimo 6 caracteres.',
        })
      }else if(error.code === "auth/email-already-in-use"){
        //alert('Usuario en uso');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario en uso',
        })
      }
    })
  }

  //Método correspondiente a login con google de la aplicación
  glogin() {
    console.log('google login!');
    this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider() )
    .then(user => {
      console.log('user logado: ', user);
      this.email = '';
      this.pass = '';
      this.db.updateUserData(user.user);
      this.router.navigate(['anunciosUsuarios']);
    })
    .catch(error => {
      console.log('Error en login con google: ', error);
    })
  }

  //Método correspondiente al logout con google de la aplicación
  logout() {
    console.log('logout!');
    this.auth.auth.signOut();
    this.email = '';
    this.pass = '';
    this.router.navigate(['anunciosUsuarios']);
  }
}