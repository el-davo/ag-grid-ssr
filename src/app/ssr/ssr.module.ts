import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SsrComponent} from './ssr.component';
import {RouterModule, Routes} from '@angular/router';
import {GridComponent} from './grid/grid.component';
import {AgGridModule} from 'ag-grid-angular';
import {ModuleRegistry} from 'ag-grid-community';
import {AllModules} from '@ag-grid-enterprise/all-modules';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/ssr.reducer';
import {EffectsModule} from '@ngrx/effects';
import {SsrEffects} from './store/ssr.effects';
import { TotalRowsComponent } from './total-rows/total-rows.component';

ModuleRegistry.registerModules(AllModules as any);

const routes: Routes = [
  {
    path: '',
    component: SsrComponent
  }
];

@NgModule({
  declarations: [SsrComponent, GridComponent, TotalRowsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([]),
    StoreModule.forFeature('ssr', reducer),
    EffectsModule.forFeature([SsrEffects])
  ]
})
export class SsrModule {
}
