import './PokeCards.css';
import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard/PokemonCard';
import ModalPokemon from './ModalPokemon/ModalPokemon';

function PokeCard(props) {
    // States
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [clickedPokemon, setClickedPokemon] = useState({});
    const [shiny, setShiny] = useState(false);


    /**
     * Toggles the shiny state and updates the value accordingly.
     *
     * @param {} 
     * @return {}
     */
    const switchShiny = () => {
        let isShiny = !shiny;
        setShiny(isShiny);
    }


    /**
     * Fetches a page of pokemon data from the backend API and updates the 
     * component state with the retrieved data.
     *
     * @param {number} page - The page number to fetch
     * @return {void} 
     */
    const fetchPage = (page) => {
        setLoading(true);
        props.setPokemonLoading(loading);
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://pokedex-backend.test/api/pokemon/page/${page}`);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                setPokemonList(data.results);
                if (props.pages === 0) {
                    props.setPages(data.pages);
                }
                setLoading(false);
                props.setPokemonLoading(loading);
            }
        };
        xhr.send();
    }


    /**
     * Fetches a single Pokemon by its ID from the backend API.
     *
     * @param {number} id - The ID of the Pokemon to fetch
     * @return {void} No return value
     */
    const fetchSinglePokemon = (id) => {
        setLoading(true);
        props.setPokemonLoading(loading);
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://pokedex-backend.test/api/pokemon/${id}`);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                setPokemonList(data.results);
                if (props.pages === 0) {
                    props.setPages(data.pages);
                }
                setLoading(false);
                props.setPokemonLoading(loading);
            }
        };
        xhr.send();
    }

    /**
     * Fetches filtered Pokemon based on types and page number.
     *
     * @param {array} types - The types of Pokemon to filter by
     * @param {number} page - The page number for paginated results
     * @return {void} No return value
     */

    const fetchFilteredPokemon = (types, page) => {
        setLoading(true);
        props.setPokemonLoading(loading);
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://pokedex-backend.test/api/pokemon/type/${types.type1}/${types.type2}/page/${page}`);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                setPokemonList(data.results);
                props.setPages(data.pages);
                setLoading(false);
                props.setPokemonLoading(loading);
            }
        };
        xhr.send();
    }

    // Use Effects to update Pokemon List based on given changes, such as page, search query and type filters
    useEffect(() => {
        if (props.typeFilter.type1 === "none" && props.typeFilter.type2 === "none") {
            fetchPage(props.page.page);
        } else {
            fetchFilteredPokemon(props.typeFilter, props.page.page);
        }
    }, [props.page]);

    useEffect(() => {
        if (props.searchQuery !== "") {
            fetchSinglePokemon(props.searchQuery);
        } else {
            fetchPage(1);
        }
    }, [props.searchQuery]);

    useEffect(() => {
        if (props.typeFilter.type1 === "none" && props.typeFilter.type2 === "none") return;
        if (props.typeFilter.type1 != props.typeFilter.type2) {
            fetchFilteredPokemon(props.typeFilter, props.page.page);
        } else {
            fetchFilteredPokemon({ type1: props.typeFilter.type1, type2: "none" }, props.page.page);
        }
    }, [props.typeFilter]);

    return (
        <>
            <div className="form-check form-switch mx-3 mt-3">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={shiny} onChange={() => switchShiny()} />
                <label className={`form-check-label fw-bold text-${props.mode === 'light' ? 'dark' : 'white'}`} htmlFor="flexSwitchCheckDefault">Shiny</label>
            </div>
            {!loading ? pokemonList.map((pokemon) => (
                <PokemonCard pokemon={pokemon} key={pokemon.name} mode={props.mode} setClickedPokemon={setClickedPokemon} shiny={shiny} />
            )) : <h1 className={`text-${props.mode === 'light' ? 'dark' : 'white'}`}>Loading..</h1>}
            {
                Object.keys(clickedPokemon).length !== 0 && <ModalPokemon pokemon={clickedPokemon} mode={props.mode} setClickedPokemon={setClickedPokemon} />
            }
        </>
    );
}

export default PokeCard;