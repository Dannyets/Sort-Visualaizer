import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Cancel as CancelIcon } from '@material-ui/icons';
import { IconButton, withStyles } from '@material-ui/core';
import { InputContainer, StyledInput, styles } from './Input.styles';

/**
 * @render react
 * @name Input
 * @description Input.
 * @example
 * <Input value={0} 
        * placeholder="Placeholder"
        * type="text"
        * />
 */
class Input extends Component{
    constructor(props){
        super(props);

        const { value }  = props;

        this.state = {
            value,
        };
    }

    componentDidUpdate(prevProps){
        if(prevProps.value !== this.props.value){
            this.setState({ value: this.props.value });
        }
    }

    handleOnChange = (e) => {
        const { target } = e;
        const { value } = target;

        this.setState({ value: value });

        const { onChange } = this.props;

        onChange(value);
    }

    clearSelection = () => {
        const { onChange } = this.props;

        const value = undefined;

        this.setState({ value });

        onChange();
    }

    render(){
        const { type, placeholder, onFocus, onBlur, classes } = this.props;
        const { value } = this.state;

        return (
            <InputContainer>
                <StyledInput placeholder={placeholder}
                             type={type ? type : 'text'}
                             value={value}
                             onChange={this.handleOnChange}
                             onFocus={onFocus}
                             onBlur={onBlur}
                />
                <IconButton className={classes.cancelButton} onClick={() => this.clearSelection()}>
                    <CancelIcon/>
                </IconButton>
            </InputContainer>
        );
    }
}

Input.propTypes = {
    /**
     * @property {string} type type of input
     */
    type: PropTypes.string,

    /**
     * @property {string} placeholder text to display when input is empty
     */
    placeholder: PropTypes.string,

    /**
     * @property {func} onFocus callback func to fire when input is on focus
     */
    onFocus: PropTypes.func,

    /**
     * @property {func} onBlur callback func to fire when input is on blur (leaving focus)
     */
    onBlur: PropTypes.string,
  
    /**
     * @property {string} value  value of input
     */
    value: PropTypes.string
  }

export default withStyles(styles)(Input);
