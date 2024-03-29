import { connect } from 'react-redux'
import { useState } from 'react';
import TypeFilter from './TypeFilter/TypeFilter';
import PokeCards from './PokeCards/PokeCards';
import Pagination from './Pagination/Pagination';
import SearchBar from './SearchBar/SearchBar';

function Content(props){
    // States and constants
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState({page: 1});
    const [pokemonLoading, setPokemonLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [typeFilter, setTypeFilter] = useState({type1: "none", type2: "none"});
    const mode = props.mode;

    /**
     * Change the current page to the specified page.
     *
     * @param {type} page - the page to change to
     * @return {type} undefined
     */
    const changePage = (page) => {
        setCurrentPage({page: page});
    }

    return (
        <>
        <div className="container mt-5">
            <div className={`row align-items-center p-2 bg-${mode} rounded rounded-4`}>
                <div className='col-2'>
                    <SearchBar mode={mode} setSearchQuery={setSearchQuery} changePage={changePage} />
                </div>
                <div className="col-10">
                    <TypeFilter mode={mode} setTypeFilter={setTypeFilter} />
                </div>
            </div>
            <div className={`mt-4 row align-items-center p-2 pb-4 bg-${mode} rounded rounded-4`}>
                    <PokeCards page={currentPage}
                        mode={mode} 
                        setPages={setPages} 
                        setPokemonLoading={setPokemonLoading} 
                        pages={pages} 
                        searchQuery={searchQuery} 
                        typeFilter={typeFilter} />
            </div>
            <div className='mt-4'>
                <Pagination mode={mode} pages={pages} currentPage={currentPage} loading={pokemonLoading} changePage={changePage} />
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