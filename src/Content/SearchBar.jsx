import { useState } from 'react'
import { connect } from 'react-redux'

function SearchBar(props){
    const mode = props.mode

    return (
        <>
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className='col-3'>
                    <div className="input-group">
                        <input className="form-control " type="text" id="search" placeholder="Search" />
                        <button className={`btn btn-${mode === 'light' ? 'primary' : 'dark'}`} type="button" id="searchButton">Search</button>
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