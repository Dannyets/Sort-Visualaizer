import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberVisualizer from '../number-visualizer/NumberVisualizer';
import { SortVisualizerContainer } from './SortVisualizer.styles';

class SortVisualizer extends Component {
    
    render(){
        const { numbers } = this.props;

        return (
            <SortVisualizerContainer>
                {numbers.map((number, index) => (<NumberVisualizer key={index} number={number}/>))}
            </SortVisualizerContainer>
        );
    }
}

SortVisualizer.propTypes = {
    numbers: PropTypes.arrayOf(PropTypes.number)
};

export default SortVisualizer;