import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

/**
*
* Core 
*
**/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

/**
*
* Routes
*
**/
import { AppRoutingModule }     from '../app-routing.module';


/**
*
* Components
* Master 
* 
**/
import { AppComponent } from './app.component';
import { LayoutHeaderComponent } from '../layout/layout-header/layout-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { ContainerComponent } from './container/container.component';

