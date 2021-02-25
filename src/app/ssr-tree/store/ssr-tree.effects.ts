import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {mergeMap, tap} from 'rxjs/operators';
import {TreeService} from '../tree.service';
import * as actions from './ssr-tree.actions';

@Injectable()
export class SsrTreeEffects {

  fetchRoots$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.fetchRoots),
      mergeMap(({endRow, success}) =>
        this.service.getRoots(endRow).pipe(
          tap((page) => {
            console.log(page);
            success(page);
          }),
        )
      )
    ), {dispatch: false});

  fetchPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.fetchPage),
      mergeMap(({endRow, success}) =>
        this.service.getPage(endRow).pipe(
          tap((page) => {
            console.log(page);
            success(page);
          }),
        )
      )
    ), {dispatch: false});

  constructor(
    private actions$: Actions,
    private service: TreeService
  ) {
  }
}
