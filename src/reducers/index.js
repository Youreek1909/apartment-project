import {combineReducers} from 'redux';
import roomReducer from './rooms';
import styleReducer from './style';
import toggleSidebar from './toggleSidebar';
import floorReducer from './floor';
import toggleMenu from './toggleMenu';
import kitchenReducer from './kitchen';
import toggleTest from './toggleTest';

const allReducers = combineReducers({
  rooms: roomReducer,
  style: styleReducer,
  sidebar: toggleSidebar,
  floor: floorReducer,
  menu: toggleMenu,
  kitchen: kitchenReducer,
  toggleTest: toggleTest
});

export default allReducers;