// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { RouterTestingModule } from '@angular/router/testing';

import { ContainerComponent } from './container.component';

// describe('ContainerComponent', () => {
//   let component: ContainerComponent;
//   let fixture: ComponentFixture<ContainerComponent>;

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             imports: [ RouterTestingModule ],
//             declarations: [ ContainerComponent ]
//         })
//         .compileComponents();
//     }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(ContainerComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//     });

//     it('should create', () => {
//         expect(component).toBeTruthy();
//     });

//     it('should have a main section ', async(() => {
//         const fixture = TestBed.createComponent(ContainerComponent);
//         fixture.detectChanges();

//         const compiled = fixture.debugElement.nativeElement;
//         var lookForEl = compiled.querySelector('main');

//         expect(lookForEl).toBeTruthy();
//     }));

//     it('should have a router outlet ', async(() => {
//         const fixture = TestBed.createComponent(ContainerComponent);
//         fixture.detectChanges();

//         const compiled = fixture.debugElement.nativeElement;
//         var lookForEl = compiled.querySelector('router-outlet');

//         expect(lookForEl).toBeTruthy();
//     }));
    
// });



/**
* Deps
**/
// import { Observable } from 'rxjs';

/**
* Component
**/


/**
* TestSuite
**/
// import { Tester } from '@tests/component.tester';
// import { TestService } from '@tests/test.service';
import { Tester } from '../../tests/component.tester';
import { TestService } from '../../tests/test.service';


let declarations = [  ]

let tester = new Tester(ContainerComponent, declarations);
tester.describe('describe 1.')
    .it('1. get all posts').should(()=>{
        console.log('when ')
        expect(2).toEqual(3);
    })       
    .it('2. get do').should((test, component, dom)=>{
       console.log('1.2. cb', {
           test: test, 
           txtDescribe: test.txtDescribe,
           txtShould: test.txtShould,
           dom: test.dom, 
           component: component
       })

       expect(component.title).toBeTruthy();
       expect(component.title).toEqual('FUCKIN WELCOME!!!');
       expect(1).toEqual(2);
       expect(dom.textContent).toEqual('dom.textContent');
    })
