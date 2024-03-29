import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
// import { HomeComponent } from './home/home.component';
// import { RegisterComponent } from './register/register.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent
      // ,HomeComponent,
      // RegisterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      CommonModule,
      // tslint:disable-next-line: deprecation
      HttpModule
   ],
    providers: [
       AuthService
    ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
