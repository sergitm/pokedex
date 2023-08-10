import { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/pokedex-logo.png'


export default function Navbar(){
    const [mode, setMode] = useState(localStorage.getItem('mode') || 'light')
    const textMode = (mode === 'light') ? 'dark' : 'light'

    return (
        <>
            <nav className={`navbar navbar-${mode} bg-${mode}`}>
                <div className="container-fluid">
                    <a className='navbar-brand icon' href='#'><img src={logo} alt="" width="30" height="24" /></a>
                    <span className={`h1 title text-${textMode}`}>PokéDex</span>
                    <FontAwesomeIcon className={`icon-${mode} mx-5`} icon={mode === 'light' ? faMoon : faSun} 
                        onClick={() => toggleMode()} />
                </div>
            </nav>
        </>
    )

    function toggleMode(){
        const newMode = mode === 'light' ? 'dark' : 'light'
        setMode(newMode)
        localStorage.setItem('mode', newMode)
    }
}