import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { MainComponent } from './main/main.component';
import { RegistroComponent } from './registro/registro.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ItemComponent, MainComponent, RegistroComponent],

  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
