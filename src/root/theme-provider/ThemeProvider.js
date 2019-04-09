import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';

const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

/**
 * @render react
 * @name ThemeProvider
 * @description Provides a theme to the child components
 * @example
 * <ThemeProvider>
 *      <div/>
 * </ThemeProvider>
 */
function ThemeProvider(props){
    return (
        <MuiThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                {props.children}
            </MuiPickersUtilsProvider>
        </MuiThemeProvider>
    );
}


ThemeProvider.propTypes = {
    
};

export default ThemeProvider;
