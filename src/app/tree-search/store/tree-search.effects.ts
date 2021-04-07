import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {mergeMap} from 'rxjs/operators';
import * as actions from './tree-search.actions';
import {TreeSearchService} from '../tree-search.service';

@Injectable()
export class TreeSearchEffects {

  fetchRoots$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.fetchRoots),
      mergeMap(() =>
        this.service.getRoots().pipe(
          mergeMap((tree) => [actions.fetchRootsSuccessful({tree})])
        )
      )
    ));

  fetchSubDirectories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.fetchSubDirs),
      mergeMap(({rootId}) =>
        this.service.getSubDirectories().pipe(
          mergeMap((tree) => [actions.fetchSubDirsSuccessful({tree, rootId})])
        )
      )
    ));

  constructor(
    private actions$: Actions,
    private service: TreeSearchService
  ) {
  }
}
