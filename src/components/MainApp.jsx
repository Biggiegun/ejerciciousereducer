import React, {useState} from 'react'
import AppRouter from '../routers/AppRouter'
import {UserContext} from './UserContext'

export const MainApp = () => {
const [state, setState] = useState({})

    return (
        <UserContext.Provider value = {{state,
            setState}}>
            <AppRouter/>
        </UserContext.Provider>
    )
}
