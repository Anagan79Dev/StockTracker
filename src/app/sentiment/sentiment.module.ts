import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SentimentMonthComponent } from './sentiment-month/sentiment-month.component';
import { SentimentComponent } from './sentiment.component';
import { SentimentRoutingModule } from './sentiment-routing.module';

@NgModule({
  imports: [SharedModule, SentimentRoutingModule],
  declarations: [SentimentComponent, SentimentMonthComponent],
})
export class SentimentModule {}
