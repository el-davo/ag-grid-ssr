import {Component, OnInit, ViewChild} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @ViewChild('grid', {static: false}) grid: AgGridAngular | undefined;

  rowData = [
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxter', price: 72000}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  gridReady(): void {
    this.grid?.api.sizeColumnsToFit();

    this.grid?.api.setSortModel([
      {
        colId: 'model',
        sort: 'asc'
      }
    ]);
  }

  sortChanged(): void {
    console.log(this.grid?.api.getSortModel());
  }

}
