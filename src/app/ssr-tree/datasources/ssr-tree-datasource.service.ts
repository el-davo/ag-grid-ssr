import {Injectable} from '@angular/core';
import {IServerSideGetRowsParams} from 'ag-grid-community';
import {fetchPage} from '../store/ssr-tree.actions';
import {Store} from '@ngrx/store';
import {ModuleState} from '../store/module.state';

@Injectable({
  providedIn: 'root'
})
export class SsrTreeDatasourceService {

  constructor(private store: Store<ModuleState>) {
  }

  getRows(params: IServerSideGetRowsParams): void {
    console.log(params);
    this.store.dispatch(fetchPage({endRow: params.request.endRow, success: params.success}));
  }
}
