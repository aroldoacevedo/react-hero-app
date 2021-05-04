import React from 'react';
import Proptypes from 'prop-types';
import { Redirect, Route } from 'react-router'

export const PublicRoute = ({ 
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    
    return (
        <Route {...rest}
            component= { (props)=> (
                   (!isAuthenticated) 
                    ? (<Component { ...props} /> )
                    : (<Redirect to="/" />)
            )}
        />
    )
}

PublicRoute.prototype = {
    isAuthenticated:  Proptypes.bool.isRequired,
    component: Proptypes.func.isRequired
 }