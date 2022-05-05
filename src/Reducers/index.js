import userReducer from './userReducer';
import {combineReducers} from 'redux';
import ModalLoadingReducer from './ModalLoading';
import SnackReducer from './SnackReducer';
import ScreenInitReducer from './ScreenInit';
import languageReducer from './languageReducer';
import  CountReaducer from './CountReaducer';
import MyCartReaducer from './MyCartReducer';
import FavoriteReducer from './Favorites';


// @ts-ignore
const rootReducer = combineReducers({
  userReducer,
  ModalLoadingReducer,
  SnackReducer,
  ScreenInitReducer,
  languageReducer,
  CountReaducer,
  MyCartReaducer,
  FavoriteReducer,
});

export default rootReducer;
