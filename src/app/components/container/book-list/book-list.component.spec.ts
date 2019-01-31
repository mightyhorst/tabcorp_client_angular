/**
*
* Core + Reactive
*
**/
import { Observable } from 'rxjs';


/**
*
* Test dependencies
*
**/
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser'

/**
*
* Component dependencies
*
**/
import { BookListComponent } from './book-list.component';
import { BookModel, BookCategory } from '@models/book.model';
import { BookApiService } from '@services/book-api/book-api.service';

/**
*
* Mocks + Spies 
*
**/
let books:BookModel[] = [
    new BookModel('title1', BookCategory.DRAMA, 'description', 1),
    new BookModel('title2', BookCategory.COMEDY, 'description', 2),
    new BookModel('title3', BookCategory.SPORT, 'description', 3),
    new BookModel('not saved yet', BookCategory.DRAMA, 'description')
]
class MockBookApiService{
    getAll():Observable<BookModel[]>{
        return Observable.create((obs) => { 
            obs.next(books);
            obs.complete(); 
        });
    },
    getBooks():Observable<BookModel[]>{
        return Observable.create((obs) => { 
            obs.next(books);
            obs.complete(); 
        });
    },
}

describe('BookListComponent', () => {

    let component: BookListComponent;
    let fixture: ComponentFixture<BookListComponent>;
    let nativeEl;
    let bookListService: BookApiService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ 
                BookListComponent 
            ],
            imports : [
                HttpClientTestingModule
            ],
            providers : [
                { 
                    provide: BookApiService,    
                    useClass: MockBookApiService 
                }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookListComponent);
        component = fixture.componentInstance;
        nativeEl = fixture.debugElement.nativeElement;
        bookListService = TestBed.get(BookApiService);
        fixture.detectChanges();
    });

    describe("Component variables", () => {

        it ("Should have book models", () => {

            expect(component.bookModels).toBeTruthy();
            expect(component.bookModels.length).toEqual(books.length);
            component.bookModels.forEach((book, index) => {
                expect(book).toEqual(books[index]);
            })

        });

    })

    describe("Book List HTML", () => {
        it('should create component', () => {
            expect(component).toBeTruthy();
        });
        
        

        it ('should have a table of Book Items', () => {
            var el = fixture.debugElement.query(By.css('.book:nth-of-type(1)'));
            expect(el).toBeTruthy();
            expect(''+el.nativeElement.classList).toBe("book");
        });

       
    });



    describe("Book List Component should call service functions", () => {
        
        it ("Should call getBooks from Books list service", () => {
            
            spyOn(bookListService, 'getAll').and.callFake((id) => {

                return Observable.create((obs) => { 
                    obs.next(books);
                    obs.complete(); 
                });
                
            }); 

            component.getBooks();
            expect(bookListService.getAll).toHaveBeenCalled();
        });

        it('Should return books list', ()=>{

            component.getBooks()
            component.bookModels.forEach((book, i) =>{
                expect(book.title).toEqual(books[i].title);
                expect(book.category).toEqual(books[i].category);
                expect(book.description).toEqual(books[i].description);
            })
            expect(component.bookLength).toEqual(books.length);

        })

    });


});
