import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SymbolSearchDto } from '../../shared/dtos/symbol-search.dto';
import { SymbolDto } from '../../shared/dtos/symbol.dto';

@Injectable({
  providedIn: 'root',
})
export class SymbolApiService {
  constructor(private httpClient: HttpClient) {}

  public getByName(symbol: string): Observable<SymbolDto | null | undefined> {
    let params = new HttpParams().set('q', symbol.toUpperCase());

    return this.httpClient
      .get<SymbolSearchDto>(`${environment.finnhubIoApiUrl}search`, {
        params: params,
      })
      .pipe(
        // Return the symbol matching the one on the list
        map((data: SymbolSearchDto) => {
          if (data && data.result.length) {
            return data.result.find((x) => x.symbol === symbol);
          }
          return null;
        })
      );
  }
}
