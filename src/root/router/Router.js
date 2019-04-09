import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter ,Route, Switch } from "react-router-dom";

import { RouterContainer } from './Router.styles';

/**
 * @render react
 * @name Router
 * @description React router wrapper
 * @example
 * <Router routes={[
 * {
 *   url: '/route/name/:optionalParam?',
 *   component: AsyncComponent,
 *   exact: true,
 * },
 * {
 *   url: '/route/name/:param',
 *   component: AsyncComponent,
 *   exact: true,
 * },
 * ]}/>
 */
const Router = ({ routes, children }) => (
    <BrowserRouter>
        <RouterContainer>
            {children}
            <Switch>
                {routes.map(({ exact, url, component }, index) => (
                    <Route key={index} exact={exact} path={url ? url : ''} component={component}/>
                ))}
            </Switch>
        </RouterContainer>
    </BrowserRouter>
);

Router.propTypes = {
    /**
     * @property {string} routes routes config
     */
    routes: PropTypes.array
  }

export default Router;
