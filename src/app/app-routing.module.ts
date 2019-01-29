import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
*
* Book Pages
*
**/
import { BookListComponent } from './components/container/book-list/book-list.component';
import { BookCreateComponent } from './components/container/book-create/book-create.component';


const routes: Routes = [
	{
		path: '',
		redirectTo: 'book', 
		pathMatch: 'full'
	},
	{
		path: 'book',
		component: BookListComponent
	},
	{
		path: 'book/create',
		component: BookCreateComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule {}