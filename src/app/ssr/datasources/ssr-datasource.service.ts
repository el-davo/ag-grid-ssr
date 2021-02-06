import {Injectable} from '@angular/core';
import {IServerSideDatasource, IServerSideGetRowsParams} from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class SsrDatasourceService implements IServerSideDatasource {

  constructor() {
  }

  getRows(params: IServerSideGetRowsParams): void {
    console.log(params);
    setTimeout(() => {
      params.success({
        rowCount: 1000,
        rowData: [
          {make: 'Toyota', model: 'Celica', price: 35000},
          {make: 'Ford', model: 'Mondeo', price: 32000},
          {make: 'Porsche', model: 'Boxter', price: 72000},
          {make: 'Honda', model: 'Boxter', price: 72000},
          {make: 'Mazda', model: 'Boxter', price: 72000},
        ]
      });
    }, 2000);
  }

}
