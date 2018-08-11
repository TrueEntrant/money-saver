import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './statistic/statistic.component';
import { StatisticService } from '../shared/services/statistic.service';

const Providers = [ StatisticService ];

@NgModule({
  imports: [
    CommonModule
  ],
  providers: Providers,
  declarations: [StatisticComponent],
  exports: [StatisticComponent]
})
export class StatisticModule { }
