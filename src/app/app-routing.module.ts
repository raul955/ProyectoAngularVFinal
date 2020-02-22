import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { VerTodoComponent } from './ver-todo/ver-todo.component';
import { AnuncioDetailsComponent } from './anuncios/anuncio-details/anuncio-details.component';
import { AnuncioDetails2Component } from './anuncios/anuncio-details2/anuncio-details2.component';
import { AnunciosList2Component } from './anuncios/anuncios-list2/anuncios-list2.component';
import { AnunciosListComponent } from './anuncios/anuncios-list/anuncios-list.component';
import { CreateAnuncioComponent } from './anuncios/create-anuncio/create-anuncio.component';

//Routing de la aplicación
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'verTodo', component: VerTodoComponent},
  {path: 'anuncios', component: AnunciosListComponent},
  {path: 'add', component: CreateAnuncioComponent},
  {path: 'lista', component: AnuncioDetailsComponent},
  {path: 'anunciosUsuarios', component: AnunciosList2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
