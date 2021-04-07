import {TreeNode} from '../tree-node.model';

export interface TreeSearchState {
  tree: TreeNode[];
  isFetchingRoots: boolean;
}

export const treeSearch: TreeSearchState = {
  tree: [],
  isFetchingRoots: false
};
