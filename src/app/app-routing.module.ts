import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'learn',
    loadChildren: () => import('./pages/learn/learn.module').then(m => m.LearnModule)
  },
  {
    path: 'literature',
    loadChildren: () => import('./pages/literature/literature.module').then(m => m.LiteratureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
