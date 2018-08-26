import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdBooksService {
  private URL: String = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private http: HttpClient) { }
  getBooks(motClef) {
    return this.http.get(this.URL + '?q=' + motClef);
  }

}
