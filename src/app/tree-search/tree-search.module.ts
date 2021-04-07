import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeSearchComponent} from './tree-search.component';
import {RouterModule, Routes} from '@angular/router';
import {GridComponent} from './grid/grid.component';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/tree-search.reducer';
import {EffectsModule} from '@ngrx/effects';
import {TreeSearchEffects} from './store/tree-search.effects';
import {AgGridModule} from 'ag-grid-angular';
import {ModuleRegistry} from 'ag-grid-community';
import {AllModules} from '@ag-grid-enterprise/all-modules';

ModuleRegistry.registerModules(AllModules as any);

const routes: Routes = [
  {
    path: '',
    component: TreeSearchComponent
  }
];

@NgModule({
  declarations: [TreeSearchComponent, GridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('treeSearch', reducer),
    EffectsModule.forFeature([TreeSearchEffects]),
    AgGridModule
  ]
})
export class TreeSearchModule {
}
