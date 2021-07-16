import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { MainComponent } from './main/main.component';
import { ItemListComponent } from './item-list/item-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemPromocionComponent } from './item-promocion/item-promocion.component';

import { IvyCarouselModule } from 'angular-responsive-carousel';
import { LoginComponent } from './login/login.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroModalComponent } from './registro-modal/registro-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaServicio } from './persona.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MainComponent,
    ItemListComponent,
    ItemPromocionComponent,
    LoginComponent,
    LoginModalComponent,
    RegistroComponent,
    RegistroModalComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  exports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [PersonaServicio],
  bootstrap: [AppComponent],
})
export class AppModule {}
