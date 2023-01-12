import {createSlice} from "@reduxjs/toolkit";

const initialState = {page:0, pokemons:[], isLoading: false}

export const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState,
    reducers: {
        startLoadingPokemon: (state) => {
            console.log(state)
        },
        setPokemons: (state, action) => {
            console.log(action)
        }
    }
})

export const {startLoadingPokemon, setPokemons} = pokemonSlice.actions;
