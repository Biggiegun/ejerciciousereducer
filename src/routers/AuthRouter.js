import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { Login } from '../components/Login'

export const AuthRouter = () => {
    return (

        // Agregar antes del switch las rutas comunes a mostrar!!
        <div className="container">
            <div>
                <Switch>
                    <Route exact path="/auth/login" component={Login}/>
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </div>
    )
}

export default AuthRouter