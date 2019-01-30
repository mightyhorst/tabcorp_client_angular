import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators }  from '@angular/forms';
import {Router} from "@angular/router"


import { BookCategory, BookModel } from '@models/book.model';
import { BookContract } from '@contracts/book.contract';
import { BookApiService } from '@services/book-api/book-api.service';

@Component({
	selector: 'book-create',
	templateUrl: './book-create.component.html',
	styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

	/**
	*
	* Layout 
	*
	**/
	layout = {
		title: 'Add Book',
		imgSrc: '/assets/img/wolf_lines.png',
		crumbs: [
			{  
				path: '/book',
				title: 'Books'
			}
		]
	}

	/**
	*
	* Form 
	*
	**/
	createBookForm: FormGroup;

	/**
	*
	* States 
	*
	**/
	isLoading = true; 
	submitted = false;

	/**
	*
	* Attributes 
	*
	**/
	listOfCats:any;
	


	/**
	*
	* Lifecycle 
	*
	**/
	constructor(private formBuilder: FormBuilder, private bookApi: BookApiService, private router: Router) { 
		this.listOfCats = BookCategory.keys();
	}

	ngOnInit() {
	    this.createBookForm = this.formBuilder.group({
			title: ['', Validators.required],
			category: [BookCategory.NONE, Validators.required],
			description: ['', [Validators.required]],
	    });
	}

	/**
	*
	* Helpers 
	* convenience getter for easy access to form fields
	**/
	get f() { return this.createBookForm.controls; }


	/**
	*
	* Event handlers  
	*
	**/
	onSubmit() {
	    this.submitted = true;

	    // -- stop here if form is invalid
	    if (this.createBookForm.invalid) {
			return;
	    }

	    let bookData:BookContract = this.createBookForm.value;
	    let bookModel = new BookModel(bookData.title, bookData.category, bookData.description);

	    this.bookApi.create(bookModel)
	    	.subscribe(bookRes => {
	    		console.log(bookRes);
	    		alert('Success! ');
	    		this.router.navigate(['/book'])
	    	});

	}

}
