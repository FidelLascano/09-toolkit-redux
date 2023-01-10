import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, incrementByAmount} from "./../slice";

const App = () => {
    const[amount, setAmout] = useState(3);
    const handlerAmountChange = (event)=>{
        const value = event.target.value;
        const amount = (value === null || value === undefined || value.toString().length<1) ? 0 : parseInt(value,10);
        setAmout(amount);
    }

    const {counter} = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div className={'container d-flex flex-column justify-content-center align-items-center'}>
            <h1>{counter}</h1>
            <div className={'row'}>
                <input className={'form-control form-control-sm'} placeholder={'Number of increment'} value={amount} onChange={(e)=>{handlerAmountChange(e)}}/>
            </div>
            <div className="container d-flex justify-content-center align-items-center mt-3">
                <button className={'btn btn-primary btn-sm me-3'} onClick={() => dispatch(increment())}>Add</button>
                <button className={'btn btn-primary btn-sm me-3'} onClick={() => dispatch(incrementByAmount(amount))}>Add {amount}</button>
                <button className={'btn btn-danger btn-sm'} onClick={() => dispatch(decrement())}>Less</button>
            </div>
        </div>
    );
};

export default App;