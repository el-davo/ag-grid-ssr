import {createAction, props} from '@ngrx/store';
import {TreeNode} from '../tree-node.model';

const FETCH_ROOTS = 'tree-search/FETCH_ROOTS';
const FETCH_ROOTS_SUCCESSFUL = 'tree-search/FETCH_ROOTS_SUCCESSFUL';
const FETCH_ROOTS_FAILED = 'tree-search/FETCH_ROOTS_FAILED';

const FETCH_SUB_DIRS = 'tree-search/FETCH_SUB_DIRS';
const FETCH_SUB_DIRS_SUCCESSFUL = 'tree-search/FETCH_SUB_DIRS_SUCCESSFUL';
const FETCH_SUB_DIRS_FAILED = 'tree-search/FETCH_SUB_DIRS_FAILED';

export const fetchRoots = createAction(FETCH_ROOTS);
export const fetchRootsSuccessful = createAction(FETCH_ROOTS_SUCCESSFUL, props<{ tree: TreeNode[] }>());
export const fetchRootsFailed = createAction(FETCH_ROOTS_FAILED);

export const fetchSubDirs = createAction(FETCH_SUB_DIRS, props<{ rootId: string }>());
export const fetchSubDirsSuccessful = createAction(FETCH_SUB_DIRS_SUCCESSFUL, props<{ tree: TreeNode[], rootId: string }>());
export const fetchSubDirsFailed = createAction(FETCH_SUB_DIRS_FAILED);
