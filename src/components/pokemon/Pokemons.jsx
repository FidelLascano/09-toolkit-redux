import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getPokemons} from "../../slice/index.js";

export const Pokemons = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPokemons());
    },[])
    return (
        <div>
            Pokemons
        </div>
    );
};
