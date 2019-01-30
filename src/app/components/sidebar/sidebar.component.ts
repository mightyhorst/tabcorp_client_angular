import { Component, OnInit } from '@angular/core';

import {SidebarItem} from '@models/sidebar-item.model';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: [
		'./sidebar.component.css',
		'./sidebar.component.responsive.css'
	]
})
export class SidebarComponent implements OnInit {

	sidebarItems: SidebarItem[] = [
		{
			title: 'All Books',
			imgSrc: '/assets/img/book.svg',
			path: '/book',
			icon: 'fa fa-chevron-right', 
			isSelected: true
		},
		{
			title: 'Add a Book',
			imgSrc: '/assets/img/book2.svg',
			path: '/book/create',
			icon: 'fa fa-chevron-right'
		}
	];

	constructor() { 
		
	}

	ngOnInit() {
		
	}

}
