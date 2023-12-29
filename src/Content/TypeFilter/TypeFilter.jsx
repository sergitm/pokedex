import './TypeFilter.css';
import { Fragment, useEffect, useState } from 'react';

export default function TypeFilter(props) {
    const [types, setTypes] = useState([]);
    
    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://pokedex-backend.test/api/pokemon/types');
        xhr.onload = function () {
            if (xhr.status === 200) {
                setTypes(JSON.parse(xhr.responseText));
            }
        };
        xhr.send();
    }, []);
    
    const typeNameF = (type) => {
        return type.name.charAt(0).toUpperCase() + type.name.slice(1);
    } 
    const imgUrl = (type) => {
        return `./src/assets/types-img/Battrio_${typeNameF(type)}_type.png`;
    } 
    
    return (<div className='container row'>
    <div className="dropdown col text-center">
        <button className="btn btn-dark dropdown-toggle" type="button" id="type1Dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Select Type 1
        </button>
        <ul className="dropdown-menu" aria-labelledby="type1Dropdown">
            <li className="dropdown-header">Type 1</li>
            <li><hr className="dropdown-divider border-top border-secondary" /></li>
            <div className='btn-group row' role='types1' aria-label='Pokemon Types radio button group'>
            { types.length !== 0 ? types.map((type) => (
                <li key={type.name+"1"} className='col-2'>
                    <input type="radio" className="btn-check" name="types1" id={type.name+"1"} autoComplete="off" />
                    <label className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'secondary'} text-white btn-type`} htmlFor={type.name+"1"} title={typeNameF(type)}>
                        <img src={imgUrl(type)} alt={typeNameF(type)} style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                    </label>
                </li>
            )) : <h3 className={`text-${props.mode === 'light' ? 'dark' : 'white'}`}>Loading..</h3>}
            </div>
        </ul>
    </div>
    <div className="dropdown col text-center">
        <button className="btn btn-dark dropdown-toggle" type="button" id="type2Dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Select Type 2
        </button>
        <ul className="dropdown-menu" aria-labelledby="type2Dropdown">
            <li className="dropdown-header">Type 2</li>
            <li><hr className="dropdown-divider border-top border-secondary" /></li>
            <div className='btn-group row' role='types2' aria-label='Pokemon Types radio button group'>
            { types.length !== 0 ? types.map((type) => (
                <li key={type.name+"2"} className='col-2'>
                    <input type="radio" className="btn-check" name="types2" id={type.name+"2"} autoComplete="off" />
                    <label className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'secondary'} text-white btn-type`} htmlFor={type.name+"2"} title={typeNameF(type)}>
                        <img src={imgUrl(type)} alt={typeNameF(type)} style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                    </label>
                </li>
            )) : <h3 className={`text-${props.mode === 'light' ? 'dark' : 'white'}`}>Loading..</h3>}
            </div>
        </ul>
    </div>
    </div>);
}