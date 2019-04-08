async function bubbleSort(numbers, onChange) {
    let currentSwapsMade;

    do {
        currentSwapsMade = 0;

        for (let currentIndex = 1; currentIndex < numbers.length; currentIndex++) {
            const currentNumber = numbers[currentIndex];

            const prevIndex = currentIndex - 1;
            const prevNumber = numbers[prevIndex];

            if(prevNumber > currentNumber){
                swap(numbers, currentIndex, prevIndex);

                if(onChange){
                    await onChange(numbers);
                }
                
                currentSwapsMade++;
            }
        }
    }
    while(currentSwapsMade > 0);
};

function swap(array, indexOne, indexTwo){
    const indexOneValue = array[indexOne];
    
    array[indexOne] = array[indexTwo];

    array[indexTwo] = indexOneValue;
}

export default {
    bubbleSort
};