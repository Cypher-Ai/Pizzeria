import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { MainComponent } from './main/main.component';
import { ItemListComponent } from './item-list/item-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemPromocionComponent } from './item-promocion/item-promocion.component';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';

import { IvyCarouselModule } from 'angular-responsive-carousel';
import { LoginComponent } from './registro-login/login/login.component';

import { RegistroComponent } from './registro-login/registro/registro.component';
import { RegistroLoginComponent } from './registro-login/registro-login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaServicio } from './persona.service';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component'


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
    MainComponent,
    HeaderComponent,
    Header2Component,
    MainComponent,
    ItemListComponent,
    ItemPromocionComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    BrowserModule,
    FontAwesomeModule,
    IvyCarouselModule,
    FormsModule
  ],

  exports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [PersonaServicio],
  bootstrap: [AppComponent],
})
export class AppModule {}
