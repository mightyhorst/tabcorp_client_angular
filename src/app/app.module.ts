/**
* Core 
**/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';

/**
* Config
**/
import {environment} from '@env';
import {ValidationError} from '@config/Errors';

/**
* Import interceptors 
**/ 
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RequestCacheInterceptor } from './interceptors/request-cache.interceptor';

/**
* Routes
**/
import { AppRoutingModule }     from './app-routing.module';

/**
* Components
**/
import { AppComponent } from '@components/app.component';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { SidebarItemComponent } from '@components/sidebar/sidebar-item/sidebar-item.component';
import { ContainerComponent } from '@components/container/container.component';

/**@todo 
* Components
* IAM 
*
import { AuthComponent } from '@components/auth/auth.component';
import { LoginComponent } from '@components/auth/login/login.component';
import { RegisterComponent } from '@components/auth/register/register.component';
import { ForgotPasswordComponent } from '@components/auth/forgot-password/forgot-password.component';
import { ConfirmEmailComponent } from '@components/auth/confirm-email/confirm-email.component';
import { ProfileComponent } from '@components/auth/profile/profile.component';
**/

/**
* Components
* Book Pages 
**/
import { BookListComponent } from './components/container/book-list/book-list.component';
import { BookCreateComponent } from './components/container/book-create/book-create.component';

/**
* Services
**/
import { BookApiService }  from '@services/book-api/book-api.service';


/**
* Factories
**/
// import { FavouritesFactory } from './models/factories/{TODO}Factory';
// import { PhotoCache } from './models/factories/{TODO}Cache';



/**
* Pipes
**/
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';


@NgModule({
    declarations: [
        /**
        * Components - Master
        **/
        AppComponent,
        SidebarComponent,
        SidebarItemComponent,
        ContainerComponent,
        LayoutHeaderComponent,

        /**
        * Components - Books
        **/
        BookListComponent,
        BookCreateComponent,

        /**
        * Pipes
        **/
        EnumToArrayPipe

        /**@todo
        *
        * Components - Authentication
        **
        AuthComponent,
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        ConfirmEmailComponent,
        ProfileComponent
        **/
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule, 
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        /**
        * Services
        **/
        BookApiService,

        /**@todo
        * Factories
        **/
        // {name}Factory,

        /**@todo
        * Cache
        **/
        // {name}Cache

        /**@todo
        * Interceptors
        **/
        /*{
            provide : HTTP_INTERCEPTORS,
            useClass : RequestCacheInterceptor,
            multi : true
        }*/
        /*
        {
            provide : HTTP_INTERCEPTORS,
            useClass : AuthInterceptor,
            multi : true
        },
        */
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
