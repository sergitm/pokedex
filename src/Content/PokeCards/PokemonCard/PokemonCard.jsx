import './PokemonCard.css';

function PokemonCard(props){
    // Style string for card
    const CARD_STYLE = `card border border-2 border-${props.mode === 'light' ? 'dark' : 'light'} text-${props.mode === 'light' ? 'dark' : 'white'}`


    /**
     * Generates the background color based on the given types.
     *
     * @param {Array} types - An array of types
     * @return {Object} The background color object
     */
    const cardBackgroundColor = (types) =>{
        if (types.length === 1) {
            return {backgroundColor : convertTypeToColor(types[0].type.name)};
        } else {
            return {background : `linear-gradient(to bottom right, ${convertTypeToColor(types[0].type.name)}, ${convertTypeToColor(types[1].type.name)})`};
        }        
    }


    /**
     * Converts a Pokémon type to a corresponding color code.
     *
     * @param {string} type - The Pokémon type
     * @return {string} The color code corresponding to the given type
     */
    const convertTypeToColor = (type) =>{
        switch (type) {
            case 'normal':
                return '#A8A878';
            case 'fire':
                return '#F08030';
            case 'water':
                return '#6890F0';
            case 'electric':
                return '#F8D030';
            case 'grass':
                return '#78C850';
            case 'ice':
                return '#98D8D8';
            case 'fighting':
                return '#C03028';
            case 'poison':
                return '#A040A0';
            case 'ground':
                return '#E0C068';
            case 'flying':
                return '#A890F0';
            case 'psychic':
                return '#F85888';
            case 'bug':
                return '#A8B820';
            case 'rock':
                return '#B8A038';
            case 'ghost':
                return '#705898';
            case 'dragon':
                return '#7038F8';
            case 'dark':
                return '#705848';
            case 'steel':
                return '#B8B8D0';
            case 'fairy':
                return '#EE99AC';
            default:
                return '#FFFFFF';
        }
    }


    /**
     * Capitalizes the first letter of the given name.
     *
     * @param {string} name - the name to be capitalized
     * @return {string} the capitalized name
     */
    const pokemonNameF = (name) =>{
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return (   
        <div className="col-3 mt-4" key={props.pokemon.name}>
            <div className={CARD_STYLE} style={cardBackgroundColor(props.pokemon.types)} title={pokemonNameF(props.pokemon.name)} onClick={() => props.setClickedPokemon(props.pokemon)}>
                <div className="card-header border-0 bg-transparent text-end"># {props.pokemon.pkdex_number}</div>
                <div className="card-body">
                    {props.pokemon.img ? <img src={props.shiny ? props.pokemon.shiny_img : props.pokemon.img} className="card-img" alt={`${pokemonNameF(props.pokemon.name)} Image`} /> :
                    <img src="./src/assets/error.png" className="card-img" alt="Error loading image" />}
                </div>
                <div className="card-footer border-0 bg-transparent text-center">{pokemonNameF(props.pokemon.name)}</div>
            </div>
        </div>
    );
}

export default PokemonCard;