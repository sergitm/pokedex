import { useState } from 'react'

export default function SearchBar(){
    const [mode, setMode] = useState(localStorage.getItem('mode') || 'light')

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