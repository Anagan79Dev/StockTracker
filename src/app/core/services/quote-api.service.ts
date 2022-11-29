import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { QuoteDto } from '../../shared/dtos/quote.dto';

@Injectable({
  providedIn: 'root',
})
export class QuoteApiService {
  constructor(private httpClient: HttpClient) {}

  public getBySymbol(symbol: string): Observable<QuoteDto | null | undefined> {
    let params = new HttpParams().set('symbol', symbol.toUpperCase());

    return this.httpClient.get<QuoteDto>(
      `${environment.finnhubIoApiUrl}quote`,
      { params: params }
    );
  }
}
