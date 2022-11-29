import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SentimentComponent } from './sentiment.component';
import { GetSentimentsBySymbolAndPeriodResolver } from '../core/resolvers/get-sentiments-by-symbol-and-period.resolver';
import { GetSymbolByNameResolver } from '../core/resolvers/get-symbol-by-name.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: ':symbol',
        component: SentimentComponent,
        resolve: {
          symbol: GetSymbolByNameResolver,
          sentiments: GetSentimentsBySymbolAndPeriodResolver,
        },
      },
    ]),
  ],
  exports: [RouterModule],
})
export class SentimentRoutingModule {}
