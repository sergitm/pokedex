import './TypeFilter.css';
import { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

export default function TypeFilter(props) {
    const [types, setTypes] = useState([]);
    const [clickedType1, setClickedType1] = useState('none');
    const [clickedType2, setClickedType2] = useState('none');
    
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
        return type.charAt(0).toUpperCase() + type.slice(1);
    } 
    const imgUrl = (type) => {
        return `./src/assets/types-img/Battrio_${typeNameF(type.name)}_type.png`;
    }

    const type1clicked = (type) => {
        setClickedType1(type.name);   
    }

    const type2clicked = (type) => {
        setClickedType2(type.name);
    }
    
    return (<div className='container row'>
    <div className="dropdown col-3 text-center">
        <button className="btn btn-dark dropdown-toggle" type="button" id="type1Dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Select Type 1
        </button>
        <ul className="dropdown-menu" aria-labelledby="type1Dropdown">
            <li className="dropdown-header">Type 1</li>
            <li><hr className="dropdown-divider border-top border-secondary" /></li>
            <div className='btn-group row' role='types1' aria-label='Pokemon Types radio button group'>
            { types.length !== 0 ? types.map((type) => (
                <li key={type.name+"1"} className='col-3'>
                    <input type="radio" className="btn-check" name="types1" id={type.name+"1"} autoComplete="off" />
                    <label className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'secondary'} text-white btn-type`} htmlFor={type.name+"1"} title={typeNameF(type.name)}  onClick={() => type1clicked(type)}>
                        <img src={imgUrl(type)} alt={typeNameF(type.name)} style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                    </label>
                </li>
            )) : <h3 className={`text-${props.mode === 'light' ? 'dark' : 'white'}`}>Loading..</h3>}
            </div>
        </ul>
    </div>
    <div className="dropdown col-3 text-center">
        <button className="btn btn-dark dropdown-toggle" type="button" id="type2Dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Select Type 2
        </button>
        <ul className="dropdown-menu" aria-labelledby="type2Dropdown">
            <li className="dropdown-header">Type 2</li>
            <li><hr className="dropdown-divider border-top border-secondary" /></li>
            <div className='btn-group row' role='types2' aria-label='Pokemon Types radio button group'>
            { types.length !== 0 ? types.map((type) => (
                <li key={type.name+"2"} className='col-3'>
                    <input type="radio" className="btn-check" name="types2" id={type.name+"2"} autoComplete="off" />
                    <label className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'secondary'} text-white btn-type`} htmlFor={type.name+"2"} title={typeNameF(type.name)} onClick={() => type2clicked(type)}>
                        <img src={imgUrl(type)} alt={typeNameF(type.name)} style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                    </label>
                </li>
            )) : <h3 className={`text-${props.mode === 'light' ? 'dark' : 'white'}`}>Loading..</h3>}
            </div>
        </ul>
    </div>
    <div className='col d-flex justify-content-end'>
        {clickedType1 !== 'none' && 
            <div className='text-start'>
                    <div className={`me-1 btn btn-outline-${props.mode === 'light' ? 'dark bg-light text-dark' : 'light bg-secondary text-white'}`}>
                        <small className='text-start'>{typeNameF(clickedType1)}</small>
                        <FontAwesomeIcon className={`ms-1 icon-${props.mode}`} size='sm' icon={faX} onClick={() => setClickedType1('none')}/>
                    </div>
            </div>}
        {clickedType2 !== 'none' && 
            <div className='text-end'>
                    <div className={`ms-1 btn btn-outline-${props.mode === 'light' ? 'dark bg-light text-dark' : 'light bg-secondary text-white'}`}>
                        <small className='text-start'>{typeNameF(clickedType2)}</small>
                        <FontAwesomeIcon className={`ms-1 icon-${props.mode}`} size='sm' icon={faX} onClick={() => setClickedType2('none')}/>
                    </div>
            </div>}
    </div>
    <div className='col text-end'>
        <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'secondary'}`} onClick={() => props.setTypeFilter({type1: clickedType1, type2: clickedType2})}>Filter</button>
    </div>
    </div>);
}