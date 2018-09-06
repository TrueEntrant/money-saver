import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRouterModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
  AuthRouterModule,
    CommonModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
