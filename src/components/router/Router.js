import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter ,Route, Switch } from "react-router-dom";

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
const Router = ({ routes }) => (
    <BrowserRouter>
        <Switch>
            {routes.map(({ exact, url, component }, index) => (
                <Route key={index} exact={exact} path={url ? url : ''} component={component}/>
            ))}
        </Switch>
    </BrowserRouter>
);

Router.propTypes = {
    /**
     * @property {string} routes routes config
     */
    routes: PropTypes.array
  }

export default Router;
