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
	* Layout 
	*
	**/
	layout = {
		title: 'Book List',
		imgSrc: '/assets/img/dragon_lines.png',
		crumbs: [
			{  
				path: '/book',
				title: 'Books'
			}
		]
	}

	/**
	*
	* Interface  
	*
	**/
	@Input() bookModels:BookModel[];
	bookLength:number;
	

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
			.subscribe(bookModels => {
				this.bookModels = bookModels;
				this.bookLength = bookModels.length;
			});
	}

}
