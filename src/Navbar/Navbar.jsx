import { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'


export default function Navbar(){
    const [mode, setMode] = useState('light')

    return (
        <>
            <div className={`navbar ${mode}`}>
                <h1 className="title">
                    PokéDex
                </h1>
                <FontAwesomeIcon icon={mode === 'light' ? faMoon : faSun} 
                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} />

            </div>
        </>
    )
}