import './PokeCards.css';
import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard/PokemonCard';

function PokeCard(props) {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);
    
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
    }, []);

    return (
        <>
        {!loading ? pokemonList.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.name} mode={props.mode} />
        )): <h1 className={`text-${props.mode === 'light' ? 'dark' : 'white'}`}>Loading..</h1>}
        </>
    );
}

export default PokeCard;