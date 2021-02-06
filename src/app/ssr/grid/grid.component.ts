import {Component, OnDestroy} from '@angular/core';
import {SsrDatasourceService} from '../datasources/ssr-datasource.service';
import {interval, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnDestroy {

  destroy$ = new Subject();

  statusBar = {
    statusPanels: [
      {
        statusPanel: 'agTotalRowCountComponent',
        align: 'center',
      }
    ]
  };

  constructor(public datasource: SsrDatasourceService) {
  }

  gridReady(params: any): void {
    params.api.sizeColumnsToFit();

    interval(5000).pipe(takeUntil(this.destroy$)).subscribe(() => params.api.refreshServerSideStore());
  }

  modelUpdated(params: any): void {
    console.log(params.api.getDisplayedRowCount());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
