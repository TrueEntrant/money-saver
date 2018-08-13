import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StatisticModule } from './statistic/statistic.module';
import { ReviewModule } from './review/review.module';
import { PlaningModule } from './planing/planing.module';


@NgModule({ // decorator is a function which get data for transfig class AppModule in an complite NgModule
  declarations: [ // Components all
    AppComponent
  ],
  imports: [ // advanced modules
    BrowserModule,
    FormsModule,
    CoreModule,
    StatisticModule,
    ReviewModule,
    PlaningModule
  ],
  providers: [], // servises functions helpers for data transfer.
  bootstrap: [AppComponent] // main component of app, app is lunch from that point
})
export class AppModule { }
