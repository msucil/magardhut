import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';

const MAT_MODULES = [
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  LayoutModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatSidenavModule,
  ];

@NgModule({
  declarations: [],
  imports: [
    MAT_MODULES
  ],
  exports: [
    MAT_MODULES
  ]
})
export class ThemeModule {
}
