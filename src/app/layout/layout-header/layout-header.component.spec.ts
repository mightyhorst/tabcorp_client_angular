/**
* Deps
**/

/**
* Test Helpers 
**/
import { Tester } from '../../tests/component.tester'; /*'@tests/component.tester'*/
import { TestService } from '../../tests/test.service';

/**
* Component
**/
import { LayoutHeaderComponent } from './layout-header.component';

/**
* Test Suite 
**/
let tester = new Tester(LayoutHeaderComponent, []);

tester.describe('LayoutHeaderComponent ')
    .it('component')
    .should('have been created')
    .have((test, component)=>{

        console.log(test);
        expect(component).toBeTruthy();

    })       
    .it('component')
    .should('have a title')
    .have((test, component, dom)=>{

        console.log(test);

       expect(component.title).toBeTruthy();
       expect(component.title).toEqual('Welcome');
       expect(dom.textContent.trim()).toEqual('Dashboard  Welcome');

    })
    .run();    
