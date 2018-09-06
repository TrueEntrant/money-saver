import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: '', component: LoginComponent}
]

export const AuthRouterModule: ModuleWithProviders = RouterModule.forChild(routes);
