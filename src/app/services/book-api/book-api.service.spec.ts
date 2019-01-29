/**
*
* Testbed + dependencies
*
**/
import { async, TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; 
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
import { BookModel } from '@models/book.model';
import { BookApiService } from './book-api.service';


describe('BookApiService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
		  	providers: [BookApiService],
		  	imports: [ 
		  		HttpClientModule,
		  		HttpClientTestingModule
		  	]
		});
	});

	afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
	    backend.verify();
	}));

	it('should be created', inject([BookApiService], (service: BookApiService) => {
		
		expect(service).toBeTruthy();
	}));



	it('should Get All Photos from the API', async(inject([BookApiService, HttpTestingController],
	    (service: BookApiService, backend: HttpTestingController) => {
	      
	    	// service.getAll().subscribe();

	      	// @todo 

		})
	));



	it('should Get Photos by Search terms from the API', async(inject([BookApiService, HttpTestingController],
	    (service: BookApiService, backend: HttpTestingController) => {
	      
	    	// service.getAll('sports music planets').subscribe();

	      	// @todo 

		})
	));



	it('@todo should Get favourites and saved photos from the API', async(inject([BookApiService, HttpTestingController],
	    (service: BookApiService, backend: HttpTestingController) => {
	      
	    	// service.getFavourites().subscribe();

	      	// @todo 

		})
	));
	  

	it('@todo should save favourite/saved photo to the API', async(inject([BookApiService, HttpTestingController],
	    (service: BookApiService, backend: HttpTestingController) => {
	      
	    	// service.postFavourite().subscribe();

	      	// @todo 

		})
	));

});
