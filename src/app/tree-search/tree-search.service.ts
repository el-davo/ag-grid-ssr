import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {TreeNode} from './tree-node.model';
import {delay} from 'rxjs/operators';
import {datatype} from 'faker';

@Injectable({
  providedIn: 'root'
})
export class TreeSearchService {

  constructor() {
  }

  getRoots(): Observable<TreeNode[]> {
    return of([
      {name: 'root1', id: this.genId(), path: ['root1'], size: 100},
      {name: 'root2', id: this.genId(), path: ['root2'], size: 200},
      {name: 'root3', id: this.genId(), path: ['root3'], size: 50}
    ]).pipe(delay(500));
  }

  getSubDirectories(): Observable<TreeNode[]> {

    const largeList = Array.from({length: 10000}, (_, index) => ({
      id: this.genId(),
      name: 'bla' + index,
      path: ['root1', 'sub1', 'bla' + index],
      size: 100
    }));

    return of([
      {name: 'sub1', id: this.genId(), path: ['root1', 'sub1'], size: 100},
      {name: 'sub2', id: this.genId(), path: ['root1', 'sub2'], size: 200},
      {name: 'sub3', id: this.genId(), path: ['root1', 'sub2', 'sub3'], size: 200},
      {name: 'sub4', id: this.genId(), path: ['root1', 'sub2', 'sub3', 'sub4'], size: 200},
      ...largeList
    ]).pipe(delay(500));
  }

  genId(): string {
    return datatype.uuid();
  }
}
