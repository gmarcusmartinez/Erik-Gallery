import { ProjectActionTypes } from 'state';

export const deleteProjectImage = (imgUrl: string) => ({
  type: ProjectActionTypes.DELETE_PROJECT_IMAGE,
  payload: imgUrl,
});
