import { Component } from '@angular/core';
import { SymbolDto } from '../shared/dtos/symbol.dto';
import { ActivatedRoute } from '@angular/router';
import { SentimentDto } from '../shared/dtos/sentiment.dto.ts';
import { orderBy } from 'lodash';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss'],
})
export class SentimentComponent {
  public symbol!: SymbolDto;
  public sentiments: SentimentDto[] = [];

  constructor(private route: ActivatedRoute) {
    this.symbol = this.route.snapshot.data['symbol'];
    this.sentiments = orderBy(
      this.route.snapshot.data['sentiments'],
      ['month'],
      ['desc']
    );
  }
}
