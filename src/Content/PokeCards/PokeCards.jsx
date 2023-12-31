import './PokeCards.css';
import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard/PokemonCard';
import ModalPokemon from './ModalPokemon/ModalPokemon';

function PokeCard(props) {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [clickedPokemon, setClickedPokemon] = useState({});
    
    useEffect(() => {
        setLoading(true);
        props.setPokemonLoading(loading);
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://pokedex-backend.test/api/pokemon/page/${props.page}`);
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
    }, [props.page]);

    useEffect(() => {
        setLoading(true);
        props.setPokemonLoading(loading);
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://pokedex-backend.test/api/pokemon/${props.searchQuery}`);
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