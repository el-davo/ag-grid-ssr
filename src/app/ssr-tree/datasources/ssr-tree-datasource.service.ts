import {Injectable} from '@angular/core';
import {IServerSideDatasource, IServerSideGetRowsParams} from 'ag-grid-community';
import {fetchPage, fetchRoots} from '../store/ssr-tree.actions';
import {Store} from '@ngrx/store';
import {ModuleState} from '../store/module.state';

@Injectable({
  providedIn: 'root'
})
export class SsrTreeDatasourceService implements IServerSideDatasource {

  constructor(private store: Store<ModuleState>) {
  }

  getRows(params: IServerSideGetRowsParams): void {
    params.request.groupKeys.length === 0 ? this.getRoots(params) : this.getChildren(params);
  }

  getRoots(params: IServerSideGetRowsParams): void {
    this.store.dispatch(fetchRoots({endRow: params.request.endRow, success: params.success}));
  }

  getChildren(params: IServerSideGetRowsParams): void {
    this.store.dispatch(fetchPage({endRow: params.request.endRow, success: params.success}));
  }
}
