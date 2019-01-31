/**
*
* Testbed + dependencies
*
**/
import { async, TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpResponse  } from '@angular/common/http'; 
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

/* 
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpClientModule, HttpRequest, HttpParams } from '@angular/common/http';
*/

/**
*
* Service + dependencies
*
**/
import { BookModel } from '../../models/book.model';
import { BookApiService } from './book-api.service';
import { HttpErrorHandler } from '../http-error-handler.service';
import { MessageService } from '../message.service';


describe('BookApiService', () => {

	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;
	let bookService: BookApiService;
	let bookModels: BookModel[]; 

	beforeEach(() => {
		TestBed.configureTestingModule({
		  	providers: [
		  		BookApiService,
		  		HttpErrorHandler,
				MessageService
		  	],
		  	imports: [ 
		  		HttpClientModule,
		  		HttpClientTestingModule
		  	]
		});

		/**
		* Inject the http, test controller, and service-under-test
	    * as they will be referenced by each test.
	    **/
	    httpClient = TestBed.get(HttpClient);
	    httpTestingController = TestBed.get(HttpTestingController);
	    bookService = TestBed.get(BookApiService);
	});


	/**
	* Seed books
	**/
	beforeEach(() => {
	    bookModels = [
	        new BookModel('title1', 'category', 'description', 1),
	        new BookModel('title2', 'category', 'description', 2),
	        new BookModel('title3', 'category', 'description', 3),
	        new BookModel('title4', 'category', 'description', 4),
	    ];
	});

	afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
	    // backend.verify();
	    httpTestingController.verify();
	}));

	it('should be created', inject([BookApiService], (service: BookApiService) => {
		expect(service).toBeTruthy();
	}));


	describe('#getAll', () => {

		it('should return expected books (called once)', () => {

		    bookService.getAll().subscribe(
		        books => expect(books).toEqual(books, 'should return expected books'),
		        fail
		    );

		    // BookApiService should have made one request to GET books from expected URL
		    const req = httpTestingController.expectOne(bookService.apiUrl);
		    expect(req.request.method).toEqual('GET')
		    
		    // Respond with the mock books
		    req.flush(bookModels);
		});

		it('should be OK returning no books', () => {

		    bookService.getAll().subscribe(
		        books => expect(books.length).toEqual(0, 'should have empty books array'),
		        fail
		    );

		    const req = httpTestingController.expectOne(bookService.apiUrl);
		    req.flush([]); // Respond with no books

		});

		// This service reports the error but finds a way to let the app keep going.
		it('should turn 404 into an empty books result', () => {

		      bookService.getAll().subscribe(
		        books => expect(books.length).toEqual(0, 'should return empty books array'),
		        fail
		      );

		      const req = httpTestingController.expectOne(bookService.apiUrl);

		      // respond with a 404 and the error message in the body
		      const msg = 'deliberate 404 error';
		      req.flush(msg, {status: 404, statusText: 'Not Found'});
		});

		/*it('should return expected books (called multiple times)', () => 
		    
		    bookService.getAll().subscribe();
		    bookService.getAll().subscribe();
		    bookService.getAll().subscribe(
		        books => expect(books).toEqual(bookModels, 'should return expected books'),
		        fail
		    );

		    const req = httpTestingController.expectOne(bookService.apiUrl);
		    const requests = httpTestingController.match(bookService.apiUrl);
		    expect(requests.length).toEqual(3, 'calls to getAll()')
		    // Respond to each request with different mock hero results
		    requests[0].flush([]);
		    requests[1].flush([ bookModels[1] ]);
		    requests[2].flush(bookModels);
		    req.flush([]);

		});*/

	})


	describe('#create', () => {

		it('should Create Book via the API and return it', () => {

		    const createdBook: BookModel = new BookModel('title1', 'category', 'description', 1);

		    bookService.create(createdBook).subscribe(
		        data => expect(data).toEqual(createdBook.toJson(), 'should return the Book'),
		        fail
		    );

		    /**
		    * BookService should have made one request to POST book
		    **/
		    const req = httpTestingController.expectOne(bookService.apiUrl);
		    expect(req.request.method).toEqual('POST');
		    expect(req.request.body).toEqual(createdBook.toJson())

		    /**
		    * Expect server to return the book model after POST
		    **/
		    const expectedResponse = new HttpResponse({ 
		      	status: 200, 
		      	statusText: 'OK', 
		      	body: createdBook.toJson()
		    });
		    req.event(expectedResponse);
		});

	});
});
