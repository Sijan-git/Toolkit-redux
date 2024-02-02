import { pokemonApi } from "../../../Api/pokemonApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


export const getPokemons = ( page = 0 ) => {

    return async ( dispatch, getState ) => {
        dispatch ( startLoadingPokemons )

        //Todo Relizar peticion http fetch

        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=${ page * 10}
        // `);
        // const data = await resp.json();
        // // console.log(data);

        const { data } = await pokemonApi.get(`pokemon?limit=100000&offset=${ page * 10}`);
        
        // // dispatch( setPokemons )

        dispatch( setPokemons({ pokemons: data.results, page: page + 1}));
    }
}