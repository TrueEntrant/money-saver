import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { StatisticComponent } from './statistic/statistic.component';


const components = [
    HeaderComponent,
    NavComponent,
    StatisticComponent
];
const Exports = [
    HeaderComponent,
    NavComponent,
    StatisticComponent
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