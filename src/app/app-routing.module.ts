import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from './books/books.component';
import {AccueilComponent} from './accueil/accueil.component';

const routes: Routes = [
  { path : '' , component : AccueilComponent} ,
  { path: 'Books/:motClef', component: BooksComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
