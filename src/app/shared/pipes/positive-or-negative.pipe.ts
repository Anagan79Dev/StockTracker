import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positiveOrNegative',
})
export class PositiveOrNegativePipe implements PipeTransform {
  public transform(value: number): string {
    if (!value) return '';

    return (value > 0 ? '+' : '') + value;
  }
}
