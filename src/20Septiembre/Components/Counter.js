import React, {useReducer} from 'react'

const Counter = () => {
    //Declaracion 
    // Recibe como valor inicial una funcion y un objeto (state inicial)
    // const [state, dispatch] = useReducer(()=>{}, {})
  
    //Inicial state
    const initialState ={
        count: 0,
        countInterval:1,
        increment:true
    }

    const reducer = (state, action)=>{
        switch (action.type) {
            case "INCREMENT":
                return{
                    ...state,
                    increment: action.increment
                }

            case "SET_INTERVAL":
            return{
                ...state,
                countInterval: parseInt(action.countInterval)
            }

            case "INCREASE_COUNT":
            return{
                ...state,
                count: state.count + state.countInterval
            }
            
            case "DECREASE_COUNT":
            return{
                ...state,
                count: state.count - state.countInterval
            }

            case "RESTART":
            return initialState

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    
    const handleIncrement = (e) =>{
        const {checked} = e.target;
        dispatch({type:"INCREMENT", increment: checked})
    }
    const handleCountInterval = (e) =>{
        const {value} = e.target;
        dispatch({type:"SET_INTERVAL", countInterval: value})
    }
    const handlecount = (e) =>{
        if(state.increment){
        dispatch({type:"INCREASE_COUNT"})
        }else{
        dispatch({type:"DECREASE_COUNT"})
        }
    }
    const handleRestart = (e) =>{
        dispatch({type:"RESTART"})
    }

    return (
        <div>
            <h1> Hook UseReducer</h1>
            <p>{"Cuenta: "+ state.count}</p>
            <div>
                <input type="checkbox"
                id="chk"
                checked={state.increment}
                onChange={handleIncrement}
                />
                <label htmlFor="chk">
                {"Incrementar"}
                </label>
            </div>
            <br/>
            <div>
            <label htmlFor="chk">
                {"Intervalo"}
                </label>
                <input
                type="text"
                id="interval"
                value={state.countInterval}
                onChange={handleCountInterval}/>
            </div>
            <br/>
            <button onClick={handlecount}>{state.increment?"Incrementar":"Decrementar"}</button>
            <button onClick={handleRestart}>Reiniciar</button>
        </div>
    )
}

export default Counter