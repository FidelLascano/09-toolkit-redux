import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {Provider} from "react-redux";
import {store} from "./store";
import {Pokemons} from "./components/pokemon/Pokemons.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <Pokemons/>
        </Provider>
    </React.StrictMode>,
)
