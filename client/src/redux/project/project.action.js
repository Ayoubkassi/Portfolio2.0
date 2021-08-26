import ProjectActionTypes from './project.types';

export const updateProjects = (projects) => ({
  type : ProjectActionTypes.UPDATE_PROJECTS,
  payload : projects
})
