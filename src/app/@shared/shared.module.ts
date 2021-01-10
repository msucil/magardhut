import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MainNavComponent} from './main-nav/main-nav.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ThemeModule } from '../@theme/theme.module';


@NgModule({
  declarations: [MainNavComponent, FooterComponent],
  exports: [
    MainNavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ThemeModule,
    RouterModule
  ]
})
export class SharedModule {
}
