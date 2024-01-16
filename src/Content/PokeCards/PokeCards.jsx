import './PokeCards.css';
import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard/PokemonCard';
import ModalPokemon from './ModalPokemon/ModalPokemon';

function PokeCard(props) {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [clickedPokemon, setClickedPokemon] = useState({});

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
    
    useEffect(() => {
        fetchPage(props.page);
    }, [props.page]);

    useEffect(() => {
        if (props.searchQuery !== "") {
            fetchSinglePokemon(props.searchQuery);
        } else {
            fetchPage(1);
        }
    }, [props.searchQuery]);

    return (
        <>
        {!loading ? pokemonList.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.name} mode={props.mode} setClickedPokemon={setClickedPokemon}/>
        )): <h1 className={`text-${props.mode === 'light' ? 'dark' : 'white'}`}>Loading..</h1>}
        {
            Object.keys(clickedPokemon).length !== 0 && <ModalPokemon pokemon={clickedPokemon} mode={props.mode} setClickedPokemon={setClickedPokemon} />
        }
        </>
    );
}

export default PokeCard;