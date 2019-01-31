import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

/**
*
* Config 
*
**/
import { environment } from '@env';

/**
*
* Services
*
**/
import { HttpErrorHandler, HandleError } from '@services/http-error-handler.service';
import { MessageService } from '@services/message.service';

/**
*
* Models 
*
**/
import { BookModel, BookCategory } from '@models/book.model';
import { BookContract, BookApiGetAllContract, BookApiCreateContract} from '@contracts/book.contract';

@Injectable()
export class BookApiService {

	/**@todo public for the test**/
	public apiUrl : string = `${environment.apiUrl}book/`;
    private headers : HttpHeaders;
    private handleError: HandleError;
    private queryParams : any;

	constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) { 
		if (isDevMode()) {
	      	console.log('👋 Development!');
	      	console.log('😀 apiUrl: '+this.apiUrl);
	    } else {
	      	console.log('💪 Production!');
	    }
	    
	    /*
	    * Headers 
	    * @todo - add injectors instead 
	    */
	    this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',                
        });

	    /*
	    * Headers 
	    */
        this.handleError = httpErrorHandler.createHandleError('BookApiService');
	}

	/**
	* Get All Books
	*
	* @todo 
	*
	* @param {} searchTerms? optional - tags to narrow the search 
	* @returns {Observable} an observable with an array of Books
	**/
	getAll(): Observable<BookModel[]>{

		return this.http.get<BookModel[]>(            
				this.apiUrl, 
            	{ headers : this.headers }
			).pipe(
				map(book => {
					/*@todo map to BookModel*/
					return book;
				}),
				catchError(this.handleError('getAll', []))
			)

	}


	/**
	* Create Book 
	*
	* @todo 
	*
	* @param {BookModel} book model to create 
	* @returns {Observable} an observable with an array of success or fail response
	**/
	create(book:BookModel): Observable<any>{
		console.log('book.toJson()', book.toJson())
		return this.http.post<BookApiCreateContract>(            
				this.apiUrl,
				book.toJson(), 
            	{ headers : this.headers }
			).pipe(
				map(book => {
					console.log('Book --->', book);
					return book;
				}),
				catchError(this.handleError('create', []))
			)

	}

}
