import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'ssr',
    loadChildren: () => import('./ssr/ssr.module').then(m => m.SsrModule)
  },
  {
    path: 'ssr-tree',
    loadChildren: () => import('./ssr-tree/ssr-tree.module').then(m => m.SsrTreeModule)
  },
  {
    path: 'tree-search',
    loadChildren: () => import('./tree-search/tree-search.module').then(m => m.TreeSearchModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/ssr'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
