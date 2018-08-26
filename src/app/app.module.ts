import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AppRoutingModule } from './/app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import {AdBooksService} from './services/ad-books.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './Pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AccueilComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [AdBooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
