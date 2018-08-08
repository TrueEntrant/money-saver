import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './statistic/statistic.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StatisticComponent],
  exports: [StatisticComponent]
})
export class StatisticModule { }
