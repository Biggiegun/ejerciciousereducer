import {React, useState} from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Counter from '../components/Counter';
import { Login } from '../components/Login';
import Navbar from '../components/Navbar';
import { PrivateRouter } from './privateRouter';
import { PublicRouter } from './PublicRouter';
import {AuthRouter} from './AuthRouter'

const AppRouter = () => {
    const [isAuth, setisAuth] = useState(false)
    return (
        <Router>
            <div>
                <div className="container">
                    <Switch>
                        <PublicRouter
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isAuth}
                        />
                        <PrivateRouter
                         path="/"
                         component={Counter}
                         isAuthenticated={isAuth}
                         />
                         <Redirect to = "/auth/login"/>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default AppRouter
