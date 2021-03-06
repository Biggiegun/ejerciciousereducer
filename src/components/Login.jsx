import React, {useReducer, useContext} from 'react';
import { login, logout } from '../actions/authAction';
import { inicialState, loginReducer } from '../reducers/loginReducer';
import { UserContext } from './UserContext';

export const Login = () => {
    
    const [state, dispatch] = useReducer(loginReducer, inicialState)
    const {setUser} = useContext(UserContext)

    return (
        <div>
        <h1>LoginScreen</h1>
        <hr />
        <h1>
            {state.name}
        </h1>
        <h1>
            {state.uid}
        </h1>
        <button className="btn btn-primary" onClick = {()=>dispatch(login("12345", "David Herrera"))}>
             Login
         </button>
         <button className="btn btn-primary" onClick = {()=>dispatch(logout())}>
             Logout
         </button>
         
         

        


   

        
    </div>
    )
}