import React, { Component } from 'react';

import { AppContainer, MainContent, ConfigurationsTitle, ConfigurationsContainer } from './SortVisualizer.styles.js';

import { 
  getDelay,
  getIsSorting,
  getNumberOfElements,
  getSortingAlgorithem,
  getNumbers,
  getValue,
  getSuggestions
} from './SortVisualizer.selectors';

import { 
  updateDelay, 
  updateIsSorting, 
  updateNumberOfElements, 
  updateNumbers, 
  updateSortingAlgorithem } from './SortVisualizer.actions';

import { AutoSuggestInput, Input, ReduxContainer } from '../components';
import NumbersVisualizer from './numbers-visualizer';
import { Button } from '@material-ui/core';

import { general as generalUtils } from '../utils';

/**
 * @render react
 * @name App
 * @description Whole app composed to tiny bit components.
 * @example
 * <App />
 */
class SortVisualizer extends Component {
    onNumberPositionChange = async (upatedNumbers) => {
    const { delay, actions } = this.props;
    const { updateNumbers } = actions;

    await generalUtils.delay(delay);

    updateNumbers(upatedNumbers);
  }

  handleSort = async () => {
    const { sortingAlgorithem, numbers, actions } = this.props;
    const { updateIsSorting } = actions;

    let currentNumbers = numbers;

    if(!numbers){
      currentNumbers = this.handleRefreshNumbers();
    }

    updateIsSorting(true);

    await sortingAlgorithem([...currentNumbers], this.onNumberPositionChange.bind(this));

    updateIsSorting(false);
  }

  handleRefreshNumbers = () => {
    const { numberOfElements, actions } = this.props;
    const { updateNumbers } = actions;
  
    const numbers = generalUtils.getRandomNumbers(numberOfElements);

    updateNumbers(numbers);

    return numbers;
  }

  render() {
    const { value, isSorting, numbers, delay, numberOfElements, suggestions, actions } = this.props;
    const { updateDelay, 
            updateNumberOfElements, 
            updateSortingAlgorithem } = actions;

    const isSortingButtonDisabled = typeof(value) !== 'number' || 
                                isSorting || 
                                !numberOfElements;

    return (
      <AppContainer>
        <MainContent>
          <ConfigurationsContainer>
            <ConfigurationsTitle>Configurations</ConfigurationsTitle>
            <AutoSuggestInput 
              value={value}
              suggestions={suggestions}
              placeholder="Please select sorting algorithem"
              onChange={(value, suggestion) => updateSortingAlgorithem(value, suggestion.sortingAlgorithem)}
            />
            <Input value={delay}
                   type="number"
                   placeholder="Enter delay miliseconds"
                   onChange={(delay) => updateDelay(delay)}/>
            <Input value={numberOfElements}
                   type="number"
                   placeholder="Enter number of elements in array"
                   onChange={(numberOfElements) => updateNumberOfElements(numberOfElements)}/>
            <Button onClick={this.handleRefreshNumbers}
                    disabled={!numberOfElements}
                    color="inheirt"
                    variant="contained">
                    Generate Random Numbers
            </Button> 
          </ConfigurationsContainer>
          <NumbersVisualizer numbers={numbers}/>
          <Button onClick={this.handleSort}
                  disabled={isSortingButtonDisabled}
                  color="primary"
                  variant="contained"> 
            Sort 
          </Button>
        </MainContent>
      </AppContainer>
    );
  }
}

export default ReduxContainer({
  selectors: {
    numbers: getNumbers,
    isSorting: getIsSorting,
    delay: getDelay,
    sortingAlgorithem: getSortingAlgorithem,
    value: getValue,
    numberOfElements: getNumberOfElements,
    suggestions: getSuggestions
  },
  actions: {
    updateDelay, 
    updateIsSorting, 
    updateNumberOfElements, 
    updateNumbers, 
    updateSortingAlgorithem
  }
})(SortVisualizer);

