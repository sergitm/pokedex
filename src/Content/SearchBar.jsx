import { connect } from 'react-redux'
import { useEffect, useState } from 'react';
import TypeFilter from './TypeFilter';

function SearchBar(props){
    const [types, setTypes] = useState([]);
    const mode = props.mode

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://pokedex-backend.test/api/pokemon/types');
        xhr.onload = function () {
            if (xhr.status === 200) {
                setTypes(JSON.parse(xhr.responseText));
            }
        };
        xhr.send();  
    },[])

    return (
        <>
        <div className="container mt-5">
            <div className={`row align-items-center p-2 bg-${mode} rounded rounded-4`}>
                <div className='col-3'>
                    <div className="input-group">
                        <input className="form-control " type="text" id="search" placeholder="Name or Pokedex #" />
                        <button className={`btn btn-${mode === 'light' ? 'primary' : 'secondary'}`} type="button" id="searchButton">Search</button>
                    </div>
                </div>
                <div className="col-9">
                    <div className='btn-group' role='types' aria-label='Pokemon Types radio button group'>
                        {types ? types.map((type) => (
                            <TypeFilter type={type} mode={mode} key={type.name} />
                        )) : <></>}
                    </div>
                </div>
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