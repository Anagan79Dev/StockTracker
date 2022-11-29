import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentIncreaseOrDecrease',
})
export class PercentIncreaseOrDecreasePipe implements PipeTransform {
  public transform(value: number): string {
    if (!value) return '';

    return (value > 0 ? '+' : '') + (value * 100).toFixed(2) + '%';
  }
}
