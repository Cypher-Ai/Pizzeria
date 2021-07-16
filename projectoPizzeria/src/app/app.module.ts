import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { MainComponent } from './main/main.component';
import { ItemListComponent } from './item-list/item-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemPromocionComponent } from './item-promocion/item-promocion.component';

import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MainComponent,
    ItemListComponent,
    ItemPromocionComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
