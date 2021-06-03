import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

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
    path: 'local-storage',
    loadChildren: () => import('./local-storage/local-storage.module').then(m => m.LocalStorageModule)
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
