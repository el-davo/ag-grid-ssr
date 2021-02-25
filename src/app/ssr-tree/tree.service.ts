import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Page} from './page.model';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor() {
  }

  getRoots(endRow: number): Observable<Page> {
    // @ts-ignore
    return of({
      rowCount: 2,
      rowData: [
        {
          id: 'root1',
          isDirectory: true,
          numberOfFiles: Math.random(),
          name: 'root1'
        },
        {
          id: 'root2',
          isDirectory: true,
          numberOfFiles: 100,
          name: 'root2'
        }
      ]
    }).pipe(delay(500));
  }

  getPage(endRow: number): Observable<Page> {
    // @ts-ignore
    return of({
      rowCount: 3,
      rowData: [
        {
          id: `${Math.random()}`,
          isDirectory: true,
          numberOfFiles: 100,
          name: 'dir1'
        },
        {
          id: `${Math.random()}`,
          isDirectory: true,
          numberOfFiles: 100,
          name: 'dir2'
        },
        {
          id: `${Math.random()}`,
          isDirectory: false,
          numberOfFiles: 100,
          name: 'file1'
        }
      ]
    }).pipe(delay(500));
  }
}
