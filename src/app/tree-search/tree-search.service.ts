import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {TreeNode} from './tree-node.model';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TreeSearchService {

  constructor() {
  }

  getRoots(): Observable<TreeNode[]> {
    return of([
      {name: 'root1', id: 'root1', path: ['root1'], size: 100},
      {name: 'root2', id: 'root2', path: ['root2'], size: 200},
      {name: 'root3', id: 'root3', path: ['root3'], size: 50}
    ]).pipe(delay(500));
  }

  getSubDirectories(): Observable<TreeNode[]> {
    return of([
      {name: 'sub1', id: 'sub1', path: ['root1', 'sub1'], size: 100},
      {name: 'sub2', id: 'sub2', path: ['root1', 'sub2'], size: 200},
    ]).pipe(delay(500));
  }
}
