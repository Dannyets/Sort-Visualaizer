import React from 'react';
import PropTypes from 'prop-types';
import NumberVisualizer from '../number-visualizer';
import { NumbersVisualizerContainer } from './NumbersVisualizer.styles';

const NumbersVisualizer = ({ numbers }) => (
    <NumbersVisualizerContainer>
        {numbers.map((number, index) => (<NumberVisualizer key={index} number={number}/>))}
    </NumbersVisualizerContainer>
);

NumbersVisualizer.propTypes = {
    numbers: PropTypes.arrayOf(PropTypes.number)
};

export default NumbersVisualizer;