import React, { useReducer } from 'react'
import { couterReducer } from '../reducers/couterReducer'
import { initialState } from '../reducers/couterReducer'
import { init } from '../reducers/couterReducer'
import { types } from '../types/types'

const Counter = () => {
    
const [counter, dispatch] = useReducer(couterReducer, initialState, init)

    return (
        <div className="container mt-3">
            <h1>Counter: {counter} </h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick = {()=> dispatch({type: types.increment})}
            >
                +1
            </button>

            <button
                className="btn btn-primary"
                onClick = {()=> dispatch({type: types.decrement})}
            >
                -1
            </button>

            <button
                className="btn btn-warning"
                onClick = {()=> dispatch({type: types.reset})}
            >
                Reset
            </button>
        </div>

    )
}

export default Counter
