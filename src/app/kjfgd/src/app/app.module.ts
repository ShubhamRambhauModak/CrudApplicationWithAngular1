import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
//import { JwtInterceptor } from './_helpers/jwt.interceptor';
//import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AppComponent } from './app.component';
//import { AlertComponent } from './_components/alert.component';
import { HomeComponent } from './home/home.component';

import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        MatTableModule,
        //MatSortModule,
    ],
    declarations: [
        AppComponent,
    //    AlertComponent,
        HomeComponent,
    ],
    providers: [
        //{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };