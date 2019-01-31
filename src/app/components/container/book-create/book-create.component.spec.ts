/**
* Component
**/
import { BookCreateComponent } from './book-create.component';

/**
* Deps
**/

/**
* Test Helpers 
**/
import { Tester } from '../../../tests/component.tester'; /*'@tests/component.tester'*/
import { TestService } from '../../../tests/test.service';

/**
* Spies
**/
import { BookApiService } from '../../../services/book-api/book-api.service';
const bookApiServiceSpy = jasmine.createSpyObj('BookApiService', ['create']);
const spies = [{ provide: BookApiService, useValue: bookApiServiceSpy }];

/**
* Test Suite 
**/
let tester = new Tester(BookCreateComponent, [], spies);

tester.describe('BookCreateComponent ')
    .it('component')
    .should('have been created')
    .have((test, component)=>{

        console.log(test);
        expect(component).toBeTruthy();

    })       
    .it('layout')
    .should('have be created')
    .have((test, component, dom)=>{

        console.log(test);

       	expect(component.layout).toBeTruthy();
       	expect(component.layout.title).toEqual('Add Book');
       	expect(component.layout.imgSrc).toEqual('/assets/img/wolf_lines.png');

    })
    .it('layout')
    .should('have been added to the dom')
    .have((test, component, dom)=>{

        console.log(test);
        //innerHTML: "<layout-header _ngcontent-c12="" title="Add Book"></layout-header><section _ngcontent-c12="" id="book-create"><h1 _ngcontent-c12=""> Add Book </h1><form _ngcontent-c12="" novalidate="" ng-reflect-form="[object Object]" class="ng-untouched ng-pristine ng-invalid"><div _ngcontent-c12="" class="row"><label _ngcontent-c12=""> Title </label><input _ngcontent-c12="" formcontrolname="title" type="text" ng-reflect-ng-class="[object Object]" ng-reflect-name="title" class="ng-untouched ng-pristine ng-invalid"><!--bindings={↵  "ng-reflect-ng-if": "false"↵}--></div><div _ngcontent-c12="" class="row"><label _ngcontent-c12=""> Category </label><select _ngcontent-c12="" formcontrolname="category" ng-reflect-name="category" class="ng-untouched ng-pristine ng-invalid"><!--bindings={↵  "ng-reflect-ng-for-of": ",Drama,Comedy,Sport"↵}--><option _ngcontent-c12="" value="" ng-reflect-value="">  </option><option _ngcontent-c12="" value="Drama" ng-reflect-value="Drama"> Drama </option><option _ngcontent-c12="" value="Comedy" ng-reflect-value="Comedy"> Comedy </option><option _ngcontent-c12="" value="Sport" ng-reflect-value="Sport"> Sport </option></select></div><div _ngcontent-c12="" class="row"><label _ngcontent-c12=""> Description </label><textarea _ngcontent-c12="" formcontrolname="description" type="text" ng-reflect-ng-class="[object Object]" ng-reflect-name="description" class="ng-untouched ng-pristine ng-invalid"></textarea><!--bindings={↵  "ng-reflect-ng-if": "false"↵}--></div><div _ngcontent-c12="" class="row"><button _ngcontent-c12="" disabled=""><!--bindings={↵  "ng-reflect-ng-if": "false"↵}--><!--bindings={↵  "ng-reflect-ng-if": "true"↵}--><span _ngcontent-c12=""> Please fill in the form </span></button></div></form></section>"
       	let h1 = dom.querySelector('#book-create h1');
       	expect(h1.textContent).toEqual(' Add Book ');

    })
    .it('createBookForm')
    .should('have be created')
    .have((test, component, dom)=>{

        console.log(test);

       	expect(component.createBookForm).toBeTruthy();

    })
    .it('createBookForm')
    .should('have be added to the dom')
    .have((test, component, dom)=>{

        console.log(test, {html: dom.outerHTML});

       	//let form = dom.querySelector('#book-create h1');
       	//expect(form.textContent).toEqual(' Add Book ');

    })
    .it('isLoading')
    .should('have be created')
    .have((test, component, dom)=>{

        console.log(test);

       	expect(component.isLoading).toEqual(true);

    })
    .it('submitted')
    .should('have be created')
    .have((test, component, dom)=>{

        console.log(test);

       	expect(component.submitted).toEqual(false);

    })
    .it('listOfCats')
    .should('have be created')
    .have((test, component, dom)=>{

        console.log(test);

       	expect(component.listOfCats).toBeTruthy();

    })
    .run();    


