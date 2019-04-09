import initialState from './SortVisualizer.initialState';
import { 
    UPDATE_DELAY,
    UPDATE_IS_SORTING,
    UPDATE_NUMBERS,
    UPDATE_NUMBER_OF_ELEMENTS,
    UPDATE_SORTING_ALGORITHEM
 } from './SortVisualizer.actionTypes';

function appReducer(state = initialState, action){
    const { type, payload } = action;

    switch (type){
        case UPDATE_DELAY: {
            const { delay } = payload;

            return {
                ...state,
                delay
            };
        }

        case UPDATE_IS_SORTING: {
            const { isSorting } = payload;

            return {
                ...state,
                isSorting
            };
        }

        case UPDATE_NUMBERS: {
            const { numbers } = payload;

            return {
                ...state,
                numbers: [...numbers]
            };
        }

        case UPDATE_NUMBER_OF_ELEMENTS: {
            const { numberOfElements } = payload;

            return {
                ...state,
                numberOfElements
            };
        }

        case UPDATE_SORTING_ALGORITHEM: {
            const { value, sortingAlgorithem } = payload;

            return {
                ...state,
                value,
                sortingAlgorithem
            };
        }

        default:
            return state;
    }
}

export default appReducer;