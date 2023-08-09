import { useState } from 'react'
import './Navbar.css'

export default function Navbar(){
    const [mode, setMode] = useState('light')

    return (
            <h1 className={`navbar ${mode}`}>
                Hola Mundo
            </h1>
    )
}