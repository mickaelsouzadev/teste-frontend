import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';     

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GradientCardComponent } from './components/gradient-card/gradient-card.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    GradientCardComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
