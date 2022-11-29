import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SymbolDto } from '../../shared/dtos/symbol.dto';
import { SymbolApiService } from '../services/symbol-api.service';

@Injectable({
  providedIn: 'root',
})
export class GetSymbolByNameResolver
  implements Resolve<SymbolDto | null | undefined>
{
  constructor(private symbolApiService: SymbolApiService) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<SymbolDto | null | undefined> {
    return this.symbolApiService.getByName(
      route.params['symbol'].toUpperCase()
    );
  }
}
