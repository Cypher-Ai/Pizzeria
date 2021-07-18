import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { MainComponent } from './main/main.component';
import { ItemListComponent } from './item-list/item-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemPromocionComponent } from './item-promocion/item-promocion.component';

import { IvyCarouselModule } from 'angular-responsive-carousel';
import { LoginComponent } from './registro-login/login/login.component';

import { RegistroComponent } from './registro-login/registro/registro.component';
import { RegistroLoginComponent } from './registro-login/registro-login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaServicio } from './persona.service';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MainComponent,
    ItemListComponent,
    ItemPromocionComponent,
    LoginComponent,
    RegistroComponent,
    RegistroLoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],

  exports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [PersonaServicio],
  bootstrap: [AppComponent],
})
export class AppModule {}
