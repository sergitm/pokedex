import { connect } from 'react-redux'
import { useEffect, useState } from 'react';
import TypeFilter from './TypeFilter/TypeFilter';
import PokeCard from './PokeCard/PokeCard';
import Pagination from './Pagination/Pagination';
import SearchBar from './SearchBar/SearchBar';

function Content(props){
    const [types, setTypes] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const mode = props.mode

    useEffect(() => {
        setLoading(true);
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
                setLoading(false);
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
                    <SearchBar mode={mode} />
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
                {!loading ? 
                    <PokeCard list={pokemon} mode={mode} />
                    : <h1 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Loading..</h1>}
            </div>
            <div className='mt-4'>
                <Pagination mode={mode} pages={pages} currentPage={currentPage} loading={loading} changePage={changePage} />
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

export default connect(mapStateToProps)(Content);