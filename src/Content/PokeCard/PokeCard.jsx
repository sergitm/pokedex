import './PokeCard.css';

function PokeCard(props) {
    const pokemonNameF = props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1);

    return (
        <div className="col-3 mt-4">
            <div className={`card bg-${props.mode === 'light' ? 'light' : 'secondary'} text-${props.mode === 'light' ? 'dark' : 'white'}`}>
            <img src={props.pokemon.img} className="card-img" alt="..." />
            <div className="card-img-overlay">
                <h4 className="card-title text-center">{pokemonNameF}</h4>
            </div>
            </div>
        </div>
    );
}

export default PokeCard;