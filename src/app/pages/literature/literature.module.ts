import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {LiteratureRoutingModule} from './literature-routing.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    LiteratureRoutingModule
  ]
})
export class LiteratureModule {
}
