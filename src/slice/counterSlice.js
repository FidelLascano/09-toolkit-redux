import {createSlice} from "@reduxjs/toolkit";

const initialState = {counter: 0}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) => {state.counter += 1;},
        decrement: (state) => {if(state.counter-1<=0){state.counter = 0;} else {state.counter -=1;}},
        incrementByAmount: (state, action) => {
            state.counter += action.payload;
        },

    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions;