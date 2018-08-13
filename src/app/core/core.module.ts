import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ButtonComponent } from './button/button.component';


const components = [
    HeaderComponent,
    NavComponent,
    ButtonComponent
];
const Exports = [
    HeaderComponent,
    NavComponent,
    ButtonComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: components,
    exports: Exports
})
export class CoreModule {

}