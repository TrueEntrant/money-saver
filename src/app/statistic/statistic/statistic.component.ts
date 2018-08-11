import { Component, OnInit } from '@angular/core';
import { StatisticService } from './../../shared/services/statistic.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  public statistic;

  constructor( private statisticService: StatisticService) {
    this.statisticService.getStatisticShort().subscribe(res => {
      this.statistic = res;
    })
   }

  ngOnInit() {
  }

  public parseDate(d: Date): string {
    const date = new Date(+d);
    return `${date.getMonth()}.${date.getFullYear()}`;
  }

  public countTotal(): number {
    return this.statistic.reduce((sum, item) => {
      return (
        item.save ? sum += item.amount : sum -= item.amount
      );
    }, 0);
  }

}
