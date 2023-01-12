import {configureStore} from "@reduxjs/toolkit";
import {counterSlice, pokemonSlice} from "./../slice";

export const store = configureStore(
    {
        reducer: {
            counter: counterSlice.reducer,
            pokemon: pokemonSlice.reducer,
        },
    })