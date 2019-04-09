import { 
    UPDATE_DELAY,
    UPDATE_IS_SORTING,
    UPDATE_NUMBERS,
    UPDATE_NUMBER_OF_ELEMENTS,
    UPDATE_SORTING_ALGORITHEM
 } from './SortVisualizer.actionTypes';

export const updateDelay = (delay) => ({
     type: UPDATE_DELAY,
     payload: { delay }
 });

export const updateIsSorting = (isSorting) => ({
    type: UPDATE_IS_SORTING,
    payload: { isSorting }
});

export const updateNumbers = (numbers) => ({
    type: UPDATE_NUMBERS,
    payload: { numbers }
});

export const updateNumberOfElements = (numberOfElements) => ({
    type: UPDATE_NUMBER_OF_ELEMENTS,
    payload: { numberOfElements }
});

export const updateSortingAlgorithem = (value, sortingAlgorithem) => ({
    type: UPDATE_SORTING_ALGORITHEM,
    payload: { value, sortingAlgorithem }
});