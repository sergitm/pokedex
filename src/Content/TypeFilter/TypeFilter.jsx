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
    
    return (
    <div className='btn-group' role='types' aria-label='Pokemon Types radio button group'>
        { types.length !== 0 ? types.map((type) => (
            <Fragment key={type.name}>
                <input type="radio" className="btn-check" name="types" id={type.name} autoComplete="off" />
                <label className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'secondary'} text-white btn-type`} htmlFor={type.name} title={typeNameF(type)}>
                    <img src={imgUrl(type)} alt={typeNameF(type)} style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                </label>
            </Fragment>        
        )) : <h3 className={`text-${props.mode === 'light' ? 'dark' : 'white'}`}>Loading..</h3>}
    </div>);
}