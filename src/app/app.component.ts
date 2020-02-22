import { Component } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = environment.title;

  variable = 'admin@admin.com';

  constructor( public auth: AuthService ){}

}
