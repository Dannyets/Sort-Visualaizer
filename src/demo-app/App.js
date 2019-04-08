import React, { Component } from 'react';

import './App.css';
import { AppContainer, MainContent, ConfigurationsTitle, ConfigurationsContainer } from './App.styles.js';

import { AutoSuggestInput, SortVisualizer, Input, Icon } from '../components';
import { Button } from '@material-ui/core';

import { sortService } from '../services';
import { general as generalUtils } from '../utils';

const SUGGESTIONS = [
  { label: "Bubble Sort", value: 0, sortingAlgorithem: sortService.bubbleSort },
  { label: "Bogo Sort", value: 1, sortingAlgorithem: sortService.bubbleSort },
];

/**
 * @render react
 * @name App
 * @description Whole app composed to tiny bit components.
 * @example
 * <App />
 */
class App extends Component {
  state = {
    numbers: generalUtils.getRandomNumbers(20),
    sortingAlgorithem: sortService.bubbleSort,
    isSorting: false,
    value: null,
    delay: null,
    numberOfElements: null
  };

  onNumberPositionChange = async (upatedNumbers) => {
    const { delay } = this.state;

    await generalUtils.delay(delay);

    this.setState({ numbers: upatedNumbers });
  }

  handleSort = async () => {
    const { sortingAlgorithem, numbers } = this.state;

    let currentNumbers = numbers;

    if(!numbers){
      currentNumbers = this.handleRefreshNumbers();
    }

    this.setState({ isSorting: true });

    await sortingAlgorithem(currentNumbers, this.onNumberPositionChange.bind(this));

    this.setState({ isSorting: false });
  }

  handleSortingAlgorithemChange = (value, sortingAlgorithem) => {
    this.setState({ value, sortingAlgorithem });
  }

  handleDelayChanged = (delay) => {
    this.setState({ delay });
  }

  handleNumberOfElementsChanged = (numberOfElements) => {
    this.setState({ numberOfElements });
  }

  handleRefreshNumbers = () => {
    const { numberOfElements } = this.state;
  
    let numbers = generalUtils.getRandomNumbers(numberOfElements);

    this.setState({ numbers });

    return numbers;
  }

  render() {
    const { value, isSorting, numbers, delay, numberOfElements } = this.state;
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
              suggestions={SUGGESTIONS}
              placeholder="Please select sorting algorithem"
              onChange={(value, suggestion) => this.handleSortingAlgorithemChange(value, suggestion.sortingAlgorithem)}
            />
            <Input value={delay}
                   type="number"
                   placeholder="Enter delay miliseconds"
                   onChange={this.handleDelayChanged}/>
            <Input value={numberOfElements}
                   type="number"
                   placeholder="Enter number of elements in array"
                   onChange={this.handleNumberOfElementsChanged}/>
            <Button onClick={this.handleRefreshNumbers}
                    disabled={!numberOfElements}
                    color="inheirt"
                    variant="contained">
                    Generate Random Numbers
            </Button> 
          </ConfigurationsContainer>
          <SortVisualizer numbers={numbers}/>
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

export default App;

