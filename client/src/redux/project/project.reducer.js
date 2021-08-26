import  ProjectActionTypes  from './project.types';


const INITIAL_STATE = {
  projects : []
}

const projectReducer = (state = INITIAL_STATE ,action) => {
  switch(action.type){
      case ProjectActionTypes.UPDATE_PROJECTS :
        return{
          ...state,
          projects : action.payload
        };
      default:
        return state;
    }
}

export default projectReducer;
