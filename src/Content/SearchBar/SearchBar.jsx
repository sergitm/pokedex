import { connect } from 'react-redux'
import { useEffect, useState } from 'react';
import TypeFilter from '../TypeFilter/TypeFilter';
import PokeCard from '../PokeCard/PokeCard';
import Pagination from '../Pagination/Pagination';

function SearchBar(props){
    const [types, setTypes] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const mode = props.mode

    useEffect(() => {
        if (types.length === 0) {
            callTypes();
        }
        callPokemon(currentPage);
    },[currentPage]);

    const callTypes = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://pokedex-backend.test/api/pokemon/types');
        xhr.onload = function () {
            if (xhr.status === 200) {
                setTypes(JSON.parse(xhr.responseText));
            }
        };
        xhr.send();
    }
    const callPokemon = (page) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://pokedex-backend.test/api/pokemon/page/${page}`);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                setPokemon(data.results);
                if (pages === 0) {
                    setPages(data.pages);
                }
            }
        };
        xhr.send(); 
    }

    const changePage = (page) => {
        setCurrentPage(page);
    }

    return (
        <>
        <div className="container mt-5">
            <div className={`row align-items-center p-2 bg-${mode} rounded rounded-4`}>
                <div className='col-3'>
                    <div className="input-group">
                        <input className="form-control " type="text" id="search" placeholder="Name or Pokedex #" />
                        <button className={`btn btn-${mode === 'light' ? 'dark' : 'secondary'}`} type="button" id="searchButton">Search</button>
                    </div>
                </div>
                <div className="col-9">
                    <div className='btn-group' role='types' aria-label='Pokemon Types radio button group'>
                        {types.length !== 0 ? types.map((type) => (
                            <TypeFilter type={type} mode={mode} key={type.name} />
                        )) : <h3 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Loading..</h3>}
                    </div>
                </div>
            </div>
            <div className={`mt-4 row align-items-center p-2 pb-4 bg-${mode} rounded rounded-4`}>
                {pokemon.length !== 0 ? pokemon.map((pokemon) => (
                    <PokeCard pokemon={pokemon} mode={mode} key={pokemon.name} />
                )) : <h1 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Loading..</h1>}
            </div>
            <div className='mt-4'>
                <Pagination mode={mode} pages={pages} currentPage={currentPage} changePage={changePage} />
            </div>
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        mode: state.themeModeReducer.mode
    }
}

export default connect(mapStateToProps)(SearchBar);