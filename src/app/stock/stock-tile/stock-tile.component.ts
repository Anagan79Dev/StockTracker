import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuoteSymbolDto } from '../../shared/dtos/quote-symbol.dto';

@Component({
  selector: 'app-stock-tile',
  templateUrl: './stock-tile.component.html',
  styleUrls: ['./stock-tile.component.scss'],
})
export class StockTileComponent implements OnInit {
  @Input() public quoteSymbol!: QuoteSymbolDto;
  @Output() public removeSymbol = new EventEmitter<string>();

  public ngOnInit(): void {}

  public onRemoveClick(symbol: string) {
    this.removeSymbol.emit(symbol);
  }
}
