import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


import userReducer from './user/user.reducer';
import projectReducer from './project/project.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist : ['user','project']
}

const rootReducer = combineReducers({
  user : userReducer,
  project : projectReducer
});


export default persistReducer(persistConfig,rootReducer);

//export default rootReducer;
