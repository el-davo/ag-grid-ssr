import {Injectable} from '@angular/core';
import {IServerSideDatasource, IServerSideGetRowsParams} from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class SsrDatasourceService implements IServerSideDatasource {

  rowData = [
    {make: 'Toyota', model: 'Celica', price: 50},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxter', price: 72000},
    {make: 'Honda', model: 'Boxter', price: 72000},
    {make: 'Mazda', model: 'Boxter', price: 72000},
  ];

  constructor() {
    setInterval(() => {
      this.rowData.push(...this.rowData);
    }, 9000);
  }

  getRows(params: IServerSideGetRowsParams): void {
    setTimeout(() => {
      params.success({
        rowCount: this.rowData.length,
        rowData: this.rowData
      });
    }, 2000);
  }

}
