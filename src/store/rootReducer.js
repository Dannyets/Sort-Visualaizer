import { combineReducers } from 'redux';
import { sortVisualizerReducer } from '../sort-visualizer';

const rootReducer = combineReducers({
  sortVisualizer: sortVisualizerReducer
});

export default rootReducer;
