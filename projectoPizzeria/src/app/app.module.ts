import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { MainComponent } from './main/main.component';

import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
import { ItemListComponent } from './item-list/item-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemPromocionComponent } from './item-promocion/item-promocion.component';

import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './registro-login/login/login.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LocalesComponent } from './locales/locales.component';
import { MisionComponent } from './mision/mision.component';

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

import { AccountInfoComponent } from './account-info/account-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DatePipe } from '@angular/common';
import { HistorialComponent } from './historial/historial.component';
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MainComponent,
    HeaderComponent,
    Header2Component,
    MainComponent,
    ItemListComponent,
    FooterComponent,
    ItemPromocionComponent,
    CartComponent,
    AccountInfoComponent,
    LoginComponent,
    NosotrosComponent,
    LocalesComponent,
    MisionComponent,
    RegistroLoginComponent,
    RegistroComponent,
    CartItemComponent,
    HistorialComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule
  ],

  exports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [PersonaServicio, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
