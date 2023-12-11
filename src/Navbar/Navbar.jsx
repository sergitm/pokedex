import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/pokedex-logo.png'
import { connect } from 'react-redux'
import { changeModeAction } from '../redux/actions/changeModeAction'


function Navbar(props){
    const mode = props.mode
    const setMode = (mode) => {
        props.changeModeAction(mode)
    }
    const textMode = (mode === 'light') ? 'dark' : 'light'

    const setThemeInStorage = (mode) => {
        localStorage.setItem('mode', mode)
    }

    function toggleMode(){
        const newMode = mode === 'light' ? 'dark' : 'light'
        setMode(newMode)
        setThemeInStorage(newMode)
    }

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
}

const mapStateToProps = (state) => {
    return {
        mode: state.themeModeReducer.mode
    }
}

const mapDispatchToProps = {
    changeModeAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);