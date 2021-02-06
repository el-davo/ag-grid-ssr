import {Component, OnInit} from '@angular/core';
import {SsrDatasourceService} from '../datasources/ssr-datasource.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  statusBar = {
    statusPanels: [
      {
        statusPanel: 'agTotalRowCountComponent',
        align: 'center'
      },
    ],
  };

  constructor(public datasource: SsrDatasourceService) {
  }

  ngOnInit(): void {
  }

  gridReady(params: any): void {
    params.api.sizeColumnsToFit();
  }

}
