import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';


const components = [
    HeaderComponent,
    NavComponent,
];
const Exports = [
    HeaderComponent,
    NavComponent,
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