import { general as generalUtils } from '../utils';
import { sortService } from '../services';

export default {
    sortingAlogrithem: null,
    isSorting: false,
    numbers: generalUtils.getRandomNumbers(20),
    value: null,
    delay: null,
    numberOfElements: null,
    suggestions: [
        { label: "Bubble Sort", value: 0, sortingAlgorithem: sortService.bubbleSort },
    ]
};