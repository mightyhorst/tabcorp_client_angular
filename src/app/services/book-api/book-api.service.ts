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
* Models 
*
**/
import { BookModel, BookCategory } from '@models/book.model';
import { BookContract, BookApiGetAllContract, BookApiCreateContract} from '@contracts/book.contract';

@Injectable()
export class BookApiService {

	private apiUrl : string = `${environment.apiUrl}book/`;
    private headers : HttpHeaders;
    private queryParams : any;

	constructor(private http: HttpClient) { 
		if (isDevMode()) {
	      	console.log('👋 Development!');
	      	console.log('😀 apiUrl: '+this.apiUrl);
	    } else {
	      	console.log('💪 Production!');
	    }
	    

	    this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',                
        });
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
				})
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
				})
			)

	}

}
