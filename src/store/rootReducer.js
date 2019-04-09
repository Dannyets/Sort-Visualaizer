import { combineReducers } from 'redux';
import { appReducer as sortVisualizerReducer } from '../demo-app';

const rootReducer = combineReducers({
  sortVisualizer: sortVisualizerReducer
});

export default rootReducer;
