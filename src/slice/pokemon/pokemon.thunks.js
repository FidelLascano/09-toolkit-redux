import {setPokemons, startLoadingPokemon} from "./pokemon.slice.js";
import {pokemonApi} from "../../api/pokemon.api.js";

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemon());
        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
        console.log(data.results);
        dispatch(setPokemons({page:page + 1, pokemons:results}))
    }
}