import './PokeCards.css';

function PokeCard(props) {
    const CARD_STYLE = `card border border-2 bg-${props.mode === 'light' ? 'light' : 'secondary'} text-${props.mode === 'light' ? 'dark' : 'white'}`
    
    const pokemonNameF = (name) =>{
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    const showPokemon = (pokemon) => {
        console.log(pokemon);
    }
    return (
        <>
        {props.list.map((pokemon) => (    
            <div className="col-3 mt-4" key={pokemon.name}>
                <div className={CARD_STYLE} title={pokemonNameF(pokemon.name)} onClick={() => showPokemon(pokemon)}>
                    <div className="card-header border-0 bg-transparent text-end"># {pokemon.pkdex_number}</div>
                    <div className="card-body">
                        <img src={pokemon.img} className="card-img" alt={`${pokemonNameF(pokemon.name)} Image`} />
                    </div>
                    <div className="card-footer border-0 bg-transparent text-center">{pokemonNameF(pokemon.name)}</div>
                </div>
            </div>
        ))}
        </>
    );
}

export default PokeCard;