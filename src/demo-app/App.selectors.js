export const getSortVisualizer = (state) => state.sortVisualizer;
export const getDelay = (state) => getSortVisualizer(state).delay;
export const getNumbers = (state) => getSortVisualizer(state).numbers;
export const getIsSorting = (state) => getSortVisualizer(state).isSorting;
export const getNumberOfElements = (state) => getSortVisualizer(state).numberOfElements;
export const getValue = (state) => getSortVisualizer(state).value;
export const getSortingAlgorithem = (state) => getSortVisualizer(state).sortingAlgorithem;
