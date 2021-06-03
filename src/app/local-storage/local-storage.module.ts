import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocalStorageComponent} from './local-storage.component';
import {GridComponent} from './grid/grid.component';
import {AgGridModule} from 'ag-grid-angular';
import {RouterModule, Routes} from '@angular/router';
import {ModuleRegistry} from 'ag-grid-community';
import {AllModules} from '@ag-grid-enterprise/all-modules';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/local-storage.reducer';

ModuleRegistry.registerModules(AllModules as any);

const routes: Routes = [
  {
    path: '',
    component: LocalStorageComponent
  }
];

@NgModule({
  declarations: [LocalStorageComponent, GridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgGridModule,
    StoreModule.forFeature('local-storage', reducer)
  ]
})
export class LocalStorageModule {
}
