import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {LearnRoutingModule} from './learn-routing.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    LearnRoutingModule
  ]
})
export class LearnModule {
}
