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
			imgSrc: '/assets/img/stag_lines_w.png',
			path: '/book',
			icon: 'fa fa-chevron-right', 
			isSelected: true
		},
		{
			title: 'Add a Book',
			imgSrc: '/assets/img/dragon_lines_w.png',
			path: '/photo/search',
			icon: 'fa fa-chevron-right'
		}
	];

	constructor() { 
		
	}

	ngOnInit() {
		
	}

}
