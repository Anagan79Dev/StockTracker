import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SymbolApiService } from '../core/services/symbol-api.service';
import { QuoteSymbolDto } from '../shared/dtos/quote-symbol.dto';
import { QuoteDto } from '../shared/dtos/quote.dto';
import { SymbolDto } from '../shared/dtos/symbol.dto';
import { NotifierService } from 'angular-notifier';
import { QuoteApiService } from '../core/services/quote-api.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  public quotesSymbols: QuoteSymbolDto[] = [];
  public isLoading = false;

  public stockFormGroup = new FormGroup({
    stockName: new FormControl('', [
      Validators.required,
      Validators.maxLength(5),
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
  });

  constructor(
    private quoteApiService: QuoteApiService,
    private symbolApiService: SymbolApiService,
    private notifierService: NotifierService
  ) {}

  public ngOnInit(): void {
    const quotesSymbolsStr = localStorage.getItem('quotesSymbols');

    if (quotesSymbolsStr != null)
      this.quotesSymbols = JSON.parse(quotesSymbolsStr) as QuoteSymbolDto[];
  }

  public onSubmit() {
    if (!this.stockFormGroup.valid) return;

    const stockName = this.stockFormGroup.controls.stockName.value;

    // Make an HTTP call only if no stock with this name is registered in the lcoalStorage
    if (!this.quotesSymbols.some((x) => x.symbol.symbol === stockName)) {
      this.isLoading = true;

      // Get the Symbol
      this.symbolApiService.getByName(stockName!).subscribe({
        next: (symbol: SymbolDto | null | undefined) => {
          // And if exists, get the quote
          if (symbol) {
            this.quoteApiService.getBySymbol(stockName!).subscribe({
              next: (quote: QuoteDto | null | undefined) => {
                // If exists, add the quote in the list and store it in localStorage
                if (quote) {
                  this.quotesSymbols.push({
                    quote,
                    symbol,
                  });

                  localStorage.setItem(
                    'quotesSymbols',
                    JSON.stringify(this.quotesSymbols)
                  );
                } else {
                  this.notifierService.notify(
                    'warning',
                    `No quote found for ${stockName!}`
                  );
                }
              },
              error: (error) => {
                console.error(error);
                this.notifierService.notify(
                  'error',
                  'Oops something went wrong when retrieving the quote...'
                );
              },
              complete: () => {
                this.isLoading = false;
              },
            });
          } else {
            this.isLoading = false;
            this.notifierService.notify(
              'warning',
              `No symbol found for ${stockName!}`
            );
          }
        },
        error: (error) => {
          console.error(error);
          this.isLoading = false;

          this.notifierService.notify(
            'error',
            'Oops something went wrong when retrieving the symbol...'
          );
        },
      });
    } else {
      this.notifierService.notify(
        'warning',
        `This stock has already been added`
      );
    }
  }

  public onRemoveSymbol(symbol: string) {
    this.quotesSymbols = this.quotesSymbols.filter(
      (x) => x.symbol.symbol !== symbol
    );

    localStorage.setItem('quotesSymbols', JSON.stringify(this.quotesSymbols));
  }
}
