import { ProjectActionTypes } from 'state/types';

export const swap = (i: number, direction: 'left' | 'right') => ({
  type: ProjectActionTypes.SWAP_PROJECT_IMAGE,
  payload: { i, direction },
});
