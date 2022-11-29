import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SentimentDto } from '../../shared/dtos/sentiment.dto.ts';
import { SentimentApiService } from '../services/sentiment-api.service';

@Injectable({
  providedIn: 'root',
})
export class GetSentimentsBySymbolAndPeriodResolver
  implements Resolve<SentimentDto[]>
{
  constructor(private sentimentApiService: SentimentApiService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<SentimentDto[]> {
    const now = new Date();
    const past = new Date();
    past.setMonth(now.getMonth() - 2);

    return this.sentimentApiService.getBySymbolAndPeriod(
      route.params['symbol'].toUpperCase(),
      past,
      now
    );
  }
}
