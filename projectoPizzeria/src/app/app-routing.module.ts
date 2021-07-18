import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistroLoginComponent } from './registro-login/registro-login.component';
import { LoginComponent } from './registro-login/login/login.component';
import { RegistroComponent } from './registro-login/registro/registro.component';

const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
