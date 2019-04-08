import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { 
    NumberVisualizerContainer, 
    PositiveVisualNumber, 
    NegativeVisualNumber, 
    PositiveVisualNumberContainer, 
    NegativeVisualNumberContainer,
    NumberTitle } from './NumberVisualizer.styles';

class NumberVisualizer extends Component {
    render(){
        const { number } = this.props;

        return (
            <NumberVisualizerContainer>
                <PositiveVisualNumberContainer>
                    {number >= 0 && <NumberTitle>{number}</NumberTitle>}
                    <PositiveVisualNumber number={number}/>
                </PositiveVisualNumberContainer>
                <NegativeVisualNumberContainer>
                    <NegativeVisualNumber number={number}/>
                    {number < 0 && <NumberTitle>{number}</NumberTitle>}
                </NegativeVisualNumberContainer>
            </NumberVisualizerContainer>
        );
    }
}

NumberVisualizer.propTypes = {
    number: PropTypes.number
};

export default NumberVisualizer;