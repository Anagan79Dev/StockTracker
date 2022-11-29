import { Component, Input, OnInit } from '@angular/core';
import { SentimentDto } from '../../shared/dtos/sentiment.dto.ts';

@Component({
  selector: 'app-sentiment-month',
  templateUrl: './sentiment-month.component.html',
  styleUrls: ['./sentiment-month.component.scss'],
})
export class SentimentMonthComponent implements OnInit {
  @Input() public sentiment!: SentimentDto;
  public monthName = '';

  constructor() {}

  public ngOnInit(): void {
    this.setMonthName();
  }

  private setMonthName(): void {
    var monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    this.monthName = monthNames[this.sentiment.month - 1];
  }
}
