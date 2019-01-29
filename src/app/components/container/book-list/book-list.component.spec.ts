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
    }
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
                // ReactiveFormsModule,
                HttpClientTestingModule
            ],
            providers : [
                // BookApiService,
                { 
                    provide: BookApiService,    
                    useClass: MockBookApiService 
                }
            ],
            schema: [NO_ERRORS_SCHEMA]
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

        it ("Should have class variables", () => {

            expect(component.bookModels).toBeTruthy();
            expect(component.bookModels.length).toEqual(books.length);
            component.bookModels.forEach((book, index) => {
                book.toEqual(books[index]);
            })

        });

    })

    describe("HTML", () => {
        it('should create component', () => {
            expect(component).toBeTruthy();
        });
        
        

        it ('should have a table of Book Items', () => {
            var findEl = nativeEl.query(By.css('form input[name="getPostId"]');
            expect(findEl).toBeTruthy();
            expect(findEl.type).toBe("number");
        });

       
    });



    describe("Book List Component should call service functions", () => {
        it ("Should call getAll from Books list service", () => {

            spyOn(bookListService, 'getAll').and.callFake((id) => {
                return Observable.create((obs) => { 
                    // -- This should be called
                    expect(true).toBeTruthy();
                    expect(id).toBe(undefined);
                    obs.complete(); 
                });
            });

            component.getAll();
        });

    });



    describe("HTML with functionality", () => {

        it ("Should update the component.getPostForm id when the numberInput form element is updated", () => {
            var idInputElement = nativeEl.query(By.css('cssquery'));
            idInputElement.value = 10;
            idInputElement.dispatchEvent(new Event('input'));
            expect(component.getPostForm.value.id).toBe(10);
        });

        it ("Should load posts into the result output when the Get Post button is clicked");

    });
});
