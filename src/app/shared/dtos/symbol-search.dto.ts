import { SymbolDto } from './symbol.dto';

export interface SymbolSearchDto {
  count: number;
  result: SymbolDto[];
}
