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
  getBooksByCategory(category) {
    this.booksService.getBooksByCategory(this.motClef , category).subscribe(res => {
      this.books = JSON.parse(JSON.stringify(res)).items ;
      console.log(category);
    });
  }
  getBooksByAuthors(author) {
    this.booksService.getBooksByAuthor(this.motClef , author).subscribe(res => {
      this.books = JSON.parse(JSON.stringify(res)).items ;
    });
  }
  search(searchEvent) {
    let term = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters
    if (term.trim() === '' || term.trim().length < 1) {
      // Load cached users
      this.filtredBooks = this.books;
    } else {
      // Get the searched users from github
     this.getBooksByCategory(term);
     console.log(this.books);

    }
  }

}
