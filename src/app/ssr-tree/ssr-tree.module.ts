import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModuleRegistry} from 'ag-grid-community';
import {AllModules} from '@ag-grid-enterprise/all-modules';
import {RouterModule, Routes} from '@angular/router';
import {SsrTreeComponent} from './ssr-tree.component';
import {GridComponent} from './grid/grid.component';
import {EffectsModule} from '@ngrx/effects';
import {SsrTreeEffects} from './store/ssr-tree.effects';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/ssr-tree.reducer';
import {AgGridModule} from 'ag-grid-angular';

ModuleRegistry.registerModules(AllModules as any);

const routes: Routes = [
  {
    path: '',
    component: SsrTreeComponent
  }
];

@NgModule({
  declarations: [SsrTreeComponent, GridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('ssrTree', reducer),
    EffectsModule.forFeature([SsrTreeEffects]),
    AgGridModule
  ]
})
export class SsrTreeModule {
}
