import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import Authentication from '../Controller/Login/authentication'; 

const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = new Authentication();
    return (
        <Route
        {...rest}
        render={props =>
            auth.isLoggedIn() ? (
            <Component {...props} />
            ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
        }
        />
    )
};
export default PrivateRoute;
