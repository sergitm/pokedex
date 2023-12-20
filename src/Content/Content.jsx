import { connect } from 'react-redux'
import { useState } from 'react';
import TypeFilter from './TypeFilter/TypeFilter';
import PokeCards from './PokeCards/PokeCards';
import Pagination from './Pagination/Pagination';
import SearchBar from './SearchBar/SearchBar';

function Content(props){
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonLoading, setPokemonLoading] = useState(false);
    const mode = props.mode

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
                    <TypeFilter mode={mode} />
                </div>
            </div>
            <div className={`mt-4 row align-items-center p-2 pb-4 bg-${mode} rounded rounded-4`}>
                    <PokeCards page={currentPage} mode={mode} setPages={setPages} setPokemonLoading={setPokemonLoading} pages={pages} />
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