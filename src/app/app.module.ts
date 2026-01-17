import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CdkDrag } from '@angular/cdk/drag-drop'

@NgModule({ 
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent], 
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatSlideToggleModule,
        MatIconModule,
        MatButtonModule,
        CdkDrag
    ], 
    providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
