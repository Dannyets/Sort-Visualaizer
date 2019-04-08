import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './App.css';
import { AppContainer, Header, MainContent } from './App.styles.js';

import Navigation from '../components/navigation';
import { AutoSuggestInput, ThemeProvider, SortVisualizer } from '../components';
import { Button } from '@material-ui/core';

import { sortService } from '../services';
import { general as generalUtils } from '../utils';

const NavigationWithRouter = withRouter(Navigation);

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
    delay: 500
  };

  async onNumberPositionChange(upatedNumbers){
    const { delay } = this.state;

    await generalUtils.delay(delay);

    this.setState({ numbers: upatedNumbers });
  }

  async handleSort(){
    const { numbers, sortingAlgorithem } = this.state;

    this.setState({ isSorting: true });

    await sortingAlgorithem(numbers, this.onNumberPositionChange.bind(this));

    this.setState({ isSorting: false });
  }

  handleSortingAlgorithemChange(value, sortingAlgorithem){
    this.setState({ value, sortingAlgorithem });
  }

  render() {
    const { value, isSorting, numbers } = this.state;
    const isSortingButtonDisabled = typeof(value) !== 'number' || isSorting;

    return (
      <ThemeProvider>
        <AppContainer>
          <Header>
            <NavigationWithRouter />
          </Header>
          <MainContent>
            <AutoSuggestInput 
              value={value}
              suggestions={[
                { label: "Bubble Sort", value: 0, sortingAlgorithem: sortService.bubbleSort },
                { label: "Bogo Sort", value: 1, sortingAlgorithem: sortService.bubbleSort },
              ]}
              placeholder="Please select sorting algorithem"
              onChange={(value, suggestion) => this.handleSortingAlgorithemChange(value, suggestion.sortingAlgorithem)}
            />
            <SortVisualizer numbers={numbers}/>
            <Button onClick={() => this.handleSort()}
                    disabled={isSortingButtonDisabled}> 
              Sort 
            </Button>
          </MainContent>
        </AppContainer>
      </ThemeProvider>
    );
  }
}

export default App;

