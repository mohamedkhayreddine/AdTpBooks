import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdBooksService} from '../services/ad-books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input()
  books: any;
  motClef: String;
  filtredBooks: any;
  selectedBook: any ;
  constructor(private  route: ActivatedRoute, private booksService: AdBooksService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.motClef = params['motClef'];
    });
    this.loadBooks();
    console.log(this.selectedBook);
  }
  loadBooks() {
    this.booksService.getBooks(this.motClef).subscribe(res => {
      this.books = JSON.parse(JSON.stringify(res)).items ;
      console.log(this.books);
    });
  }
}
