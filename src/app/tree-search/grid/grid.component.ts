import {Component, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {ModuleState} from '../store/module.state';
import * as actions from '../store/tree-search.actions';
import {Observable} from 'rxjs';
import {TreeNode} from '../tree-node.model';
import {AgGridAngular} from 'ag-grid-angular';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @ViewChild('grid', {static: false}) grid: AgGridAngular | undefined;

  tree$: Observable<TreeNode[]> | undefined;

  columnDefs = [{field: 'size'}];

  autoGroupColumnDef = {
    headerName: 'Name',
    field: 'name',
    cellRendererParams: {suppressCount: true},
  };

  constructor(private store: Store<ModuleState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(actions.fetchRoots());

    this.tree$ = this.store.select(state => state.treeSearch.tree);
  }

  gridReady(params: any): void {
    params.api.sizeColumnsToFit();
  }

  getDataPath(data: TreeNode): string[] {
    return data.path;
  }

  getRowNodeId(row: TreeNode): string {
    return row.id;
  }

  expand(node: any): void {
    this.store.dispatch(actions.fetchSubDirs({rootId: node.data.id}));
  }

  search(event: KeyboardEvent): void {
    this.grid?.api.expandAll();
    this.grid?.api.setQuickFilter((event.target as HTMLInputElement).value);
  }

}
