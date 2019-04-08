import React, { Component } from 'react';

import './App.css';
import { AppContainer, MainContent, ConfigurationsTitle } from './App.styles.js';

import { AutoSuggestInput, SortVisualizer, Input } from '../components';
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
    numbers: [5, 100, 12, 30, 55, 1, 78, 22, -5, -30, -50],
    sortingAlgorithem: sortService.bubbleSort,
    isSorting: false,
    value: null,
    delay: null
  };

  onNumberPositionChange = async (upatedNumbers) => {
    const { delay } = this.state;

    await generalUtils.delay(delay);

    this.setState({ numbers: upatedNumbers });
  }

  handleSort = async () => {
    const { numbers, sortingAlgorithem } = this.state;

    this.setState({ isSorting: true });

    await sortingAlgorithem(numbers, this.onNumberPositionChange.bind(this));

    this.setState({ isSorting: false });
  }

  handleSortingAlgorithemChange = (value, sortingAlgorithem) => {
    this.setState({ value, sortingAlgorithem });
  }

  handleDelayChanged = (delay) => {
    this.setState({ delay });
  }

  render() {
    const { value, isSorting, numbers, delay } = this.state;
    const isSortingButtonDisabled = typeof(value) !== 'number' || isSorting;

    return (
      <AppContainer>
        <MainContent>
          <div>
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
          </div>
          <SortVisualizer numbers={numbers}/>
          <Button onClick={() => this.handleSort()}
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

