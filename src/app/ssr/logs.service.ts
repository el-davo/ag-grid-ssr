import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Page} from './page.model';
import {delay} from 'rxjs/operators';
import {Car} from './car.model';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  rowCount = 15;

  rowData;

  rowData1 = {
    5: [
      {make: 'Toyota', model: 'Celica', price: 1},
      {make: 'Ford', model: 'Mondeo', price: 2},
      {make: 'Porsche', model: 'Boxter', price: 3},
      {make: 'Honda', model: 'Boxter', price: 4},
      {make: 'Mazda', model: 'Boxter', price: 5},
    ],
    10: [
      {make: 'Toyota', model: 'Celica', price: 6},
      {make: 'Ford', model: 'Mondeo', price: 7},
      {make: 'Porsche', model: 'Boxter', price: 8},
      {make: 'Honda', model: 'Boxter', price: 9},
      {make: 'Mazda', model: 'Boxter', price: 10},
    ],
    15: [
      {make: 'Toyota', model: 'Celica', price: 11},
      {make: 'Ford', model: 'Mondeo', price: 12},
      {make: 'Porsche', model: 'Boxter', price: 13},
      {make: 'Honda', model: 'Boxter', price: 14},
      {make: 'Mazda', model: 'Boxter', price: 15},
    ],
    20: [
      {make: 'Toyota', model: 'Celica', price: 16},
      {make: 'Ford', model: 'Mondeo', price: 17},
      {make: 'Porsche', model: 'Boxter', price: 18},
      {make: 'Honda', model: 'Boxter', price: 19},
      {make: 'Mazda', model: 'Boxter', price: 20},
    ],
    25: [
      {make: 'Toyota', model: 'Celica', price: 21},
      {make: 'Ford', model: 'Mondeo', price: 22},
      {make: 'Porsche', model: 'Boxter', price: 23},
      {make: 'Honda', model: 'Boxter', price: 24},
      {make: 'Mazda', model: 'Boxter', price: 25},
    ],
    30: [
      {make: 'Toyota', model: 'Celica', price: 26},
      {make: 'Ford', model: 'Mondeo', price: 27},
      {make: 'Porsche', model: 'Boxter', price: 28},
      {make: 'Honda', model: 'Boxter', price: 29},
      {make: 'Mazda', model: 'Boxter', price: 30},
    ],
    35: [
      {make: 'Toyota', model: 'Celica', price: 31},
      {make: 'Ford', model: 'Mondeo', price: 32},
      {make: 'Porsche', model: 'Boxter', price: 33},
      {make: 'Honda', model: 'Boxter', price: 34},
      {make: 'Mazda', model: 'Boxter', price: 35},
    ],
    40: [
      {make: 'Toyota', model: 'Celica', price: 36},
      {make: 'Ford', model: 'Mondeo', price: 37},
      {make: 'Porsche', model: 'Boxter', price: 38},
      {make: 'Honda', model: 'Boxter', price: 39},
      {make: 'Mazda', model: 'Boxter', price: 40},
    ],
    45: [
      {make: 'Toyota', model: 'Celica', price: 41},
      {make: 'Ford', model: 'Mondeo', price: 42},
      {make: 'Porsche', model: 'Boxter', price: 43},
      {make: 'Honda', model: 'Boxter', price: 44},
      {make: 'Mazda', model: 'Boxter', price: 45},
    ],
    50: [
      {make: 'Toyota', model: 'Celica', price: 46},
      {make: 'Ford', model: 'Mondeo', price: 47},
      {make: 'Porsche', model: 'Boxter', price: 48},
      {make: 'Honda', model: 'Boxter', price: 49},
      {make: 'Mazda', model: 'Boxter', price: 50},
    ]
  };

  rowData2 = {
    5: [
      {make: 'Toyota', model: 'Celica', price: 1},
      {make: 'Ford', model: 'Mondeo', price: 2},
      {make: 'Porsche', model: 'Boxter', price: 3},
      {make: 'Honda', model: 'Boxter', price: 4},
      {make: 'New', model: 'Boxter', price: 5},
    ],
    10: [
      {make: 'Mazda', model: 'Boxter', price: 6},
      {make: 'Toyota', model: 'Celica', price: 7},
      {make: 'Ford', model: 'Mondeo', price: 8},
      {make: 'Porsche', model: 'Boxter', price: 9},
      {make: 'Honda', model: 'Boxter', price: 10},
    ],
    15: [
      {make: 'Mazda', model: 'Boxter', price: 11},
      {make: 'Toyota', model: 'Celica', price: 12},
      {make: 'new2', model: 'new2', price: 13},
      {make: 'Ford', model: 'Mondeo', price: 14},
      {make: 'new3', model: 'new3', price: 15}
    ],
    20: [
      {make: 'Porsche', model: 'Boxter', price: 16},
      {make: 'Toyota', model: 'Celica', price: 17},
      {make: 'Ford', model: 'Mondeo', price: 18},
      {make: 'Porsche', model: 'Boxter', price: 19},
    ]
  };

  constructor() {
    this.rowData = this.rowData1;
    setTimeout(() => {
      console.log('Switch data');
      this.rowData = this.rowData2 as any;
      this.rowCount = 18;
    }, 13000);
  }

  fetchPage(endRow: number): Observable<Page> {
    console.log(endRow);
    return of({
      rowCount: this.rowCount,
      // @ts-ignore
      rowData: this.rowData[endRow] as Car[]
    }).pipe(delay(1000));
  }
}
