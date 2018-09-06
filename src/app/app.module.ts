import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/module';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from './../environments/environment';
import { reduers, metaReducers } from './reducers';


@NgModule({
  //
  declarations: [AppComponent],
  imports: [
  BrowserModule, // здесь  представлены прочие модули, которые использует приложение ангу,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot(reduers, {metaReducers}), // главный роутинг модуль.
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    StoreDevtoolsModule.instrument({name: 'store devtools', logOnly: environment.production}),
    EffectsModule.forRoot([])
  ],
  exports: [],
  providers: [], // провайдеры обеспечивают обмен данными. Здесь находятся сервисы и др вспомогательные функции для манипуляций с данными
  bootstrap: [AppComponent] // тут корневой компонент - с него начинается запуск приложения
})
export class AppModule {}
