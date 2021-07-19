import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AppComponent } from './app.component';
import { CarritoListComponent } from './carrito-list/carrito-list.component';
import { CartComponent } from './cart/cart.component';
import { ItemListComponent } from './item-list/item-list.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LocalesComponent } from './locales/locales.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { NosotrosComponent } from './nosotros/nosotros.component';



const routes: Routes = [
  {
    path: '',
    component: ItemListComponent
  },
  {
    path: 'admin',
    component: DefaultComponent,
    children: [{
      path: 'admin',
      component: DashboardComponent
    }, {
      path: 'posts',
      component: PostsComponent
    }]
  },
  {
    path: 'about',
    component: NosotrosComponent
  },
  {
    path: 'locales',
    component: LocalesComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'account',
    component: AccountInfoComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
