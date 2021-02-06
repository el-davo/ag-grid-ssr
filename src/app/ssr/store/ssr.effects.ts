import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {mergeMap, tap} from 'rxjs/operators';
import * as actions from './ssr.actions';
import {LogsService} from '../logs.service';

@Injectable()
export class SsrEffects {

  fetchPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.fetchPage),
      mergeMap(({endRow, success}) =>
        this.logsService.fetchPage(endRow).pipe(
          tap((page) => success(page)),
          mergeMap((page) => [actions.setTotalRows({totalRows: page.rowCount})])
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private logsService: LogsService
  ) {
  }
}
