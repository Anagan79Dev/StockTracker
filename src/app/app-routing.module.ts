import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { GetSentimentsBySymbolAndPeriodResolver } from './core/resolvers/get-sentiments-by-symbol-and-period.resolver';
import { GetSymbolByNameResolver } from './core/resolvers/get-symbol-by-name.resolver';

const routes: Routes = [
  {
    path: '',
    component: StockComponent,
    pathMatch: 'full',
  },
  {
    path: 'sentiment/:symbol',
    loadChildren: () =>
      import('./sentiment/sentiment.module').then((m) => m.SentimentModule),
    component: SentimentComponent,
    resolve: {
      symbol: GetSymbolByNameResolver,
      sentiments: GetSentimentsBySymbolAndPeriodResolver,
    },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
