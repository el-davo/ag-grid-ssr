import {Injectable} from '@angular/core';
import {IServerSideDatasource, IServerSideGetRowsParams} from 'ag-grid-community';
import {Store} from '@ngrx/store';
import {ModuleState} from '../store/module.state';
import {fetchPage} from '../store/ssr.actions';

@Injectable({
  providedIn: 'root'
})
export class SsrDatasourceService implements IServerSideDatasource {

  constructor(private store: Store<ModuleState>) {
  }

  getRows(params: IServerSideGetRowsParams): void {
    this.store.dispatch(fetchPage({endRow: params.request.endRow, success: params.success}));
  }
}
