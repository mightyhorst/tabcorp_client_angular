import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators }  from '@angular/forms';

import { BookCategory, BookModel } from '@models/book.model';

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
		imgSrc: '/assets/img/flickr.png',
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
	constructor(private formBuilder: FormBuilder) { 
		console.log('\n\n\n\n');
		console.log('BookCategory', BookCategory)
		console.log('Object.keys(BookCategory)', Object.keys(BookCategory) );
		console.log('\n\n\n\n');
		// this.listOfCats = Object.keys(BookCategory);
		// console.log('\n\n\n\nthis.listOfCats', this.listOfCats)
		this.listOfCats = BookCategory.keys();
	}

	ngOnInit() {
	    this.createBookForm = this.formBuilder.group({
			title: ['', Validators.required],
			category: [BookCategory.NONE, Validators.required],
			// category: ['', Validators.required],
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

	    // stop here if form is invalid
	    if (this.createBookForm.invalid) {
			return;
	    }

	    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.createBookForm.value))
	}

}
