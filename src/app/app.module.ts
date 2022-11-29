import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { NotifierModule } from 'angular-notifier';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './core/interceptors/custom-http.interceptor';
import { StockComponent } from './stock/stock.component';
import { StockTileComponent } from './stock/stock-tile/stock-tile.component';

@NgModule({
  declarations: [AppComponent, StockComponent, StockTileComponent],
  imports: [BrowserModule, AppRoutingModule, NotifierModule, SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
