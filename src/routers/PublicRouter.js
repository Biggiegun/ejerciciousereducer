import React from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router-dom'


// Rutas Públicas !!!
export const PublicRouter = ({
    isAuthenticated,
    component: Component,
    ...rest

}) => {
    return (
        <Route {...rest}
        component={(props)=>(
            (isAuthenticated)?(<Redirect to="/"/>):(<Component {...props}/>)
        )}
        
        />

    )
}
PublicRouter.propTypes ={
    isAthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}