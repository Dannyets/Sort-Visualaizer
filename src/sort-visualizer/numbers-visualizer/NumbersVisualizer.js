import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberVisualizer from '../number-visualizer';
import { NumbersVisualizerContainer } from './NumbersVisualizer.styles';

class NumbersVisualizer extends Component {
    
    render(){
        const { numbers } = this.props;

        return (
            <NumbersVisualizerContainer>
                {numbers.map((number, index) => (<NumberVisualizer key={index} number={number}/>))}
            </NumbersVisualizerContainer>
        );
    }
}

NumbersVisualizer.propTypes = {
    numbers: PropTypes.arrayOf(PropTypes.number)
};

export default NumbersVisualizer;