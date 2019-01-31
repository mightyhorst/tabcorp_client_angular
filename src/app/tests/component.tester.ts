import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { By } from '@angular/platform-browser'

import {} from 'jasmine';

import { Component } from '@angular/core';


let before = function(me, componentClass:any, declarations:any, spies:any){

	describe(me.txtDescribe, () => {

	    beforeEach(async(() => {

	    	/**
	    	*
	    	* Step 1: Configure Testing Module
	    	*
	    	**/
	        console.log('Step 1: Configure Testing Module');

	        if(!declarations) declarations = [];
			if(!spies) spies = [];

	        TestBed.configureTestingModule({
	            declarations: [componentClass, ...declarations], 
	            providers: [...spies],
	            imports : [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule],
            	schemas: [NO_ERRORS_SCHEMA]
	        })
	        .compileComponents();
	    
	    }));//....before 

	    beforeEach(() => {

	        /**
	        *
	        * Step 2: Set references 
	        *
	        **/
	        console.log('Step 2: Set references');

	        me.fixture = TestBed.createComponent(componentClass);
	        me.component = me.fixture.componentInstance;
	        me.dom = me.fixture.debugElement.nativeElement;
	        
	        me.fixture.detectChanges();


	    });//....before 

	    afterEach(() => {
	        TestBed.resetTestingModule();
	    });//....after


	    /**
	    *
	    * Add all tests 
	    *
	    **/
	    me.tests.forEach(test => {
		    
		    describe(test.txtDescribe, () => {

		        it (test.txtShould, () => {
		        	// console.log('me.txtDescribe--->', {me: me, 'me.fixture': me.fixture});
		        	test.fn(me, me.component, me.dom);
		        })

		    });

		})

	})//....describe
}



interface TestModel{
	txtDescribe:string;
	txtShould:string;
	fn: any;
}

export function Tester(component, declarations, spies){
    var me = this; 
    me.txtDescribe;
    me.txtShould;

    me.tests = [];

    me.component;
    me.dom;
    
    this.it = function(txtShould) {
        console.log(`${txtShould}`)
        me.txtShould = txtShould;
        return me;
    }

    this.should = function(txtShould) {
        console.log(`${txtShould}`)
        me.txtShould += ' should ' + txtShould;
        return me;
    }

    this.have = function(fn) {

        /*
        describe(me.txtDescribe, () => {

            it (me.txtShould, () => {

            	console.log(`Test: ${me.txtDescribe} - ${me.txtShould}:`, {
            	    test: me, 
            	    txtDescribe: me.txtDescribe,
            	    txtShould: me.txtShould,
            	    dom: me.dom, 
            	    component: me.component
            	})

                fn(me, me.component, me.dom);
                
            });
        });
        */
        me.tests.push({
        	txtDescribe: me.txtDescribe,
        	txtShould: me.txtShould,
        	fn: fn
        })

        return me;
    }

    this.run = function() {
    	before(me, component, declarations, spies);
    }
    
    this.describe = function(txtDescribe) {
        console.log(`${txtDescribe}`)
        me.txtDescribe = txtDescribe;
        return me;
    }
    this.construct = function() {
        
    }
    this.construct();
}