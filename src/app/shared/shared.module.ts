// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PercentIncreaseOrDecreasePipe } from './pipes/percent.pipe';
import { PositiveOrNegativePipe } from './pipes/positive-or-negative.pipe';
import { ArrowComponent } from './components/arrow/arrow.component';

const angularModules = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
];

const pipes = [PercentIncreaseOrDecreasePipe, PositiveOrNegativePipe];

const components = [ArrowComponent];

@NgModule({
  imports: [angularModules],
  declarations: [pipes, components],
  exports: [angularModules, pipes, components],
})
export class SharedModule {}
