import './PokemonCard.css';

function PokemonCard(props){
    const CARD_STYLE = `card border border-2 bg-${props.mode === 'light' ? 'light' : 'secondary'} text-${props.mode === 'light' ? 'dark' : 'white'}`
    
    const pokemonNameF = (name) =>{
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return (   
        <div className="col-3 mt-4" key={props.pokemon.name}>
            <div className={CARD_STYLE} title={pokemonNameF(props.pokemon.name)} onClick={() => props.setClickedPokemon(props.pokemon)}>
                <div className="card-header border-0 bg-transparent text-end"># {props.pokemon.pkdex_number}</div>
                <div className="card-body">
                    <img src={props.pokemon.img} className="card-img" alt={`${pokemonNameF(props.pokemon.name)} Image`} />
                </div>
                <div className="card-footer border-0 bg-transparent text-center">{pokemonNameF(props.pokemon.name)}</div>
            </div>
        </div>
    );
}

export default PokemonCard;