import { Component, Input, Output, OnInit } from '@angular/core';

/**
*
* Models + Service 
*
**/
import { BookModel }  from '@models/book.model';
import { BookApiService }  from '@services/book-api/book-api.service';

@Component({
	selector: 'book-list',
	templateUrl: './book-list.component.html',
	styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

	/**
	*
	* Interface  
	*
	**/
	@Input() bookModels:BookModel[];

	constructor(private bookService:BookApiService) { }

	/**
	*
	* Lifecycle 
	*
	**/
	ngOnInit() {

		this.getBooks();

	}

	/**
	*
	* Services 
	*
	**/
	getBooks(): void{
		this.bookService
			.getAll()
			.subscribe(bookModels => this.bookModels = bookModels);
	}

}
