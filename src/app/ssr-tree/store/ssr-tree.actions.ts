import {createAction, props} from '@ngrx/store';
import {LoadSuccessParams} from 'ag-grid-community/dist/lib/rowNodeCache/rowNodeBlock';

const FETCH_PAGE = 'ssr-tree/FETCH_PAGE';

export const fetchPage = createAction(FETCH_PAGE, props<{ endRow: number, success: (params: LoadSuccessParams) => void }>());
