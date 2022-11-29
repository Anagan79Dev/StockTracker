import { QuoteDto } from './quote.dto';
import { SymbolDto } from './symbol.dto';

export class QuoteSymbolDto {
  quote: QuoteDto;
  symbol: SymbolDto;

  constructor(quote: QuoteDto, symbol: SymbolDto) {
    this.quote = quote;
    this.symbol = symbol;
  }
}
