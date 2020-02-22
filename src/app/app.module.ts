import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { VerTodoComponent } from './ver-todo/ver-todo.component';
import { FireDbService } from './fire-db.service';
import { AnuncioDetailsComponent } from './anuncios/anuncio-details/anuncio-details.component';
import { AnunciosListComponent } from './anuncios/anuncios-list/anuncios-list.component';
import { CreateAnuncioComponent } from './anuncios/create-anuncio/create-anuncio.component';
import { AnuncioDetails2Component } from './anuncios/anuncio-details2/anuncio-details2.component';
import { AnunciosList2Component } from './anuncios/anuncios-list2/anuncios-list2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    VerTodoComponent,
    AnuncioDetailsComponent,
    AnunciosListComponent,
    CreateAnuncioComponent,
    AnuncioDetails2Component,
    AnunciosList2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
