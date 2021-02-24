import {Component, OnDestroy, OnInit} from '@angular/core';
import {SsrTreeDatasourceService} from '../datasources/ssr-tree-datasource.service';
import {TreeNode} from '../tree-node.model';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy {

  destroy$ = new Subject();
  autoGroupColumnDef = {
    field: 'name',
    resizable: true,
    cellRendererParams: {
      innerRenderer: (params: any): string => {
        return params.data.name;
      },
    },
  };

  constructor(public datasource: SsrTreeDatasourceService) {
  }

  ngOnInit(): void {
  }

  gridReady(params: any): void {
    params.api.sizeColumnsToFit();
  }

  isServerSideGroup(treeNode: TreeNode): boolean {
    return treeNode.isDirectory;
  }

  getServerSideGroupKey(treeNode: TreeNode): string {
    return treeNode.id;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
