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

    const reducer = (state, action)=>{}

    const [state, dispatch] = useReducer(reducer, initialState)
    const handleIncrement = (e) =>{

    }
    
    return (
        <div>
            <h1> Hook UseReducer</h1>
            <p>{"Cuenta: "+ state.count}</p>
            <div>
                <input type="checkbox"
                id="chk"
                defaultChecked={state.increment}
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
            </div>
        </div>
    )
}

export default Counter