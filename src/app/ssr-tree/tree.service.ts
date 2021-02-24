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

  getPage(endRow: number): Observable<Page> {
    // @ts-ignore
    return of({
      rowCount: 3,
      rowData: [
        {
          id: 'dir1',
          isDirectory: true,
          numberOfFiles: 100,
          name: 'dir1'
        },
        {
          id: 'dir2',
          isDirectory: true,
          numberOfFiles: 100,
          name: 'dir2'
        },
        {
          id: 'file1',
          isDirectory: false,
          numberOfFiles: 100,
          name: 'file1'
        }
      ]
    }).pipe(delay(500));
  }
}
