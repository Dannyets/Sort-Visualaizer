import React, { Component } from 'react';

import './SortVisualizer.css';


import { 
  AppContainer, 
  MainContent, 
  ConfigurationSection, 
  ConfigurationsContainer,
  ExplosionContainer } from './SortVisualizer.styles.js';

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
import Explosion from "react-explode/Explosion9";

import { general as generalUtils } from '../utils';

/**
 * @render react
 * @name App
 * @description Whole app composed to tiny bit components.
 * @example
 * <App />
 */
class SortVisualizer extends Component {
  state = {
    showExplosion: false
  }

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

    this.setState({ showExplosion: true });
  }

  handleRefreshNumbers = () => {
    const { numberOfElements, actions } = this.props;
    const { updateNumbers } = actions;
  
    const numbers = generalUtils.getRandomNumbers(numberOfElements);

    updateNumbers(numbers);

    return numbers;
  }

  getExplosionSize(){
    let explostionSize = 800;
    const deviceWidth = window.outerWidth;

    if(deviceWidth < 700){
      explostionSize = 600;
    }
    else if(deviceWidth < 800){
        explostionSize = 700
    }

    return explostionSize;
  }

  render() {
    const { value, isSorting, numbers, delay, numberOfElements, suggestions, actions } = this.props;
    const { showExplosion } = this.state;
    const { updateDelay, 
            updateNumberOfElements, 
            updateSortingAlgorithem } = actions;

    const isSortingButtonDisabled = typeof(value) !== 'number' || 
                                isSorting || 
                                !numberOfElements;

    const explosionSize = this.getExplosionSize();

    return (
      <AppContainer>
        <MainContent>
          <ConfigurationsContainer>
            <ConfigurationSection>
              <span className="width-half">Sorting Algorithem</span>
              <AutoSuggestInput 
                value={value}
                suggestions={suggestions}
                placeholder="Please select sorting algorithem"
                className="width-half"
                onChange={(value, suggestion) => updateSortingAlgorithem(value, suggestion.sortingAlgorithem)}
              />
            </ConfigurationSection>
            <ConfigurationSection>
              <span className="width-half">Delay</span>
              <Input value={delay}
                    type="number"
                    placeholder="Enter delay miliseconds"
                    className="width-half"
                    onChange={(delay) => updateDelay(delay)}/>
            </ConfigurationSection>
            <ConfigurationSection>
              <span className="width-half">Number Of Random Elements</span>
              <Input value={numberOfElements}
                    type="number"
                    className="width-half"
                    placeholder="Enter number of random elements to generate"
                    onChange={(numberOfElements) => updateNumberOfElements(numberOfElements)}/>
            </ConfigurationSection>
          </ConfigurationsContainer>
          <NumbersVisualizer numbers={numbers}/>
          <ConfigurationSection>
            <Button onClick={this.handleRefreshNumbers}
                      disabled={!numberOfElements || isSorting}
                      className="button width-half"
                      color="inheirt"
                      variant="contained">
                      Generate Random Numbers
            </Button> 
            <Button onClick={this.handleSort}
                    disabled={isSortingButtonDisabled}
                    className="button width-half"
                    color="primary"
                    variant="contained"> 
              Sort 
            </Button>
            {showExplosion && 
            <ExplosionContainer>
              <Explosion size={explosionSize} 
                         delay={0} 
                         repeatDelay={0} 
                         repeat={0} 
                         onComplete={() => this.setState({ showExplosion: false })}/>
            </ExplosionContainer>}
          </ConfigurationSection>
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

