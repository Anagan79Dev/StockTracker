import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SentimentDto } from '../../shared/dtos/sentiment.dto.ts';
import { SentimentsDto } from '../../shared/dtos/sentiments.dto';
import dateFormat from 'dateformat';

@Injectable({
  providedIn: 'root',
})
export class SentimentApiService {
  constructor(private httpClient: HttpClient) {}

  public getBySymbolAndPeriod(
    symbol: string,
    from: Date,
    to: Date
  ): Observable<SentimentDto[]> {
    let params = new HttpParams()
      .set('symbol', symbol.toUpperCase())
      .set('from', dateFormat(from, 'yyyy-mm-dd'))
      .set('to', dateFormat(to, 'yyyy-mm-dd'));

    return this.httpClient
      .get<SentimentsDto>(
        `${environment.finnhubIoApiUrl}stock/insider-sentiment`,
        {
          params: params,
        }
      )
      .pipe(
        map((data: SentimentsDto) => {
          return data.data;
        })
      );
  }
}
