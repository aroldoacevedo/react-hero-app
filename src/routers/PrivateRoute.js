import React from 'react';
import Proptypes from 'prop-types';
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({ 
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    
    localStorage.setItem('lastPath', rest.location.pathname);
    
    return (
        <Route {...rest}
            component= { (props)=> (
                   (isAuthenticated) 
                    ? (<Component { ...props} /> )
                    : (<Redirect to="/login" />)
            )}
        />
    )
}

PrivateRoute.prototype = {
   isAuthenticated:  Proptypes.bool.isRequired,
   component: Proptypes.func.isRequired
}
