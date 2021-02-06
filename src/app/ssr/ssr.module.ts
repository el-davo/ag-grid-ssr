import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SsrComponent} from './ssr.component';
import {RouterModule, Routes} from '@angular/router';
import {GridComponent} from './grid/grid.component';
import {AgGridModule} from 'ag-grid-angular';
import {ModuleRegistry} from 'ag-grid-community';
import {ServerSideRowModelModule} from '@ag-grid-enterprise/server-side-row-model';

ModuleRegistry.registerModules([ServerSideRowModelModule as any]);

const routes: Routes = [
  {
    path: '',
    component: SsrComponent
  }
];

@NgModule({
  declarations: [SsrComponent, GridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([])
  ]
})
export class SsrModule {
}
