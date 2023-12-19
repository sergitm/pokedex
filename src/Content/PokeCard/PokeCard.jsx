import './PokeCard.css';

function PokeCard(props) {
    const pokemonNameF = props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1);

    return (
        <div className="col-3 mt-4">
            <div className={`card bg-${props.mode === 'light' ? 'light' : 'secondary'} text-${props.mode === 'light' ? 'dark' : 'white'}`} title={pokemonNameF}>
                <div className="card-header border-0 bg-transparent text-end"># {props.pokemon.pkdex_number}</div>
                <div className="card-body">
                    <img src={props.pokemon.img} className="card-img" alt={`${pokemonNameF} Image`} />
                </div>
                <div className="card-footer border-0 bg-transparent text-center">{pokemonNameF}</div>
            </div>
        </div>
    );
}

export default PokeCard;