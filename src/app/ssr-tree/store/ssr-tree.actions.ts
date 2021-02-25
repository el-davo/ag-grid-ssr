import {createAction, props} from '@ngrx/store';
import {LoadSuccessParams} from 'ag-grid-community/dist/lib/rowNodeCache/rowNodeBlock';

const FETCH_ROOTS = 'ssr-tree/FETCH_ROOTS';
const FETCH_PAGE = 'ssr-tree/FETCH_PAGE';

export const fetchRoots = createAction(FETCH_ROOTS, props<{ endRow: number, success: (params: LoadSuccessParams) => void }>());
export const fetchPage = createAction(FETCH_PAGE, props<{ endRow: number, success: (params: LoadSuccessParams) => void }>());
