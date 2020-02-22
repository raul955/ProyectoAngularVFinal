import { Component, OnInit } from '@angular/core';
import { FireDbService } from '../fire-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-todo',
  templateUrl: './ver-todo.component.html',
  styleUrls: ['./ver-todo.component.css']
})
export class VerTodoComponent implements OnInit {

  users = [];

  constructor(public db: FireDbService, private router: Router) { }

  ngOnInit() {

    //Al entrar en la sección se carga todos los usuarios
    this.db.getUsers().subscribe( snap => {
      this.users = [];
      snap.forEach( u=> {

        const user: any = u.payload.val();
        user.key = u.key;

        this.users.push(user);
        console.log(u);
      })
      console.log('users: '+this.users);
    })

  }

}
