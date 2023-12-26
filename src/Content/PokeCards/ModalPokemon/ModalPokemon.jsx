import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { CloseButton } from 'react-bootstrap';
import './ModalPokemon.css';

function ModalPokemon(props){
    const [modalIsOpen, setIsOpen] = useState(true);

    function closeModal() {
        setIsOpen(false);
        props.setClickedPokemon({});
    }

    function capitalizeFirstLetter(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    function formatSize(size) {
        return (parseInt(size) / 10).toFixed(1).toString().replace('.', ',');
    }

    function typeImg(type) {
        return `./src/assets/types-img/Battrio_${capitalizeFirstLetter(type)}_type.png`;
    }

    return (
        <>
            <Modal contentClassName={props.mode === 'light' ? 'bg-light' : 'bg-dark text-white'} show={modalIsOpen} size='lg' onHide={closeModal} centered>
                <Modal.Header >
                    <Modal.Title className='ms-auto'># {props.pokemon.pkdex_number} - {capitalizeFirstLetter(props.pokemon.name)}</Modal.Title>
                    <CloseButton onClick={closeModal} variant={(props.mode === 'dark' ? 'white' : null)} />
                </Modal.Header>

                <Modal.Body>
                    <div className='row container'>
                        <div className='col'>
                            <img src={props.pokemon.img} alt={capitalizeFirstLetter(props.pokemon.name)} />
                        </div>
                        <div className='col'>
                            <h5 className='text-center'>Basic Info</h5>
                            <ul className="list-group">
                                <li className={`list-group-item d-flex justify-content-center align-items-center ${props.mode === 'dark' ? 'bg-dark text-white' : ''}`}>
                                    <div className="container ms-2 me-auto">
                                        <div className="fw-bold">Name:</div>
                                        {capitalizeFirstLetter(props.pokemon.name)}
                                    </div>
                                </li>
                                <li className={`list-group-item d-flex justify-content-center align-items-center ${props.mode === 'dark' ? 'bg-dark text-white' : ''}`}>
                                    <div className="container ms-2 me-auto">
                                        <div className="fw-bold">PokeDex nº:</div>
                                        #{props.pokemon.pkdex_number}
                                    </div>
                                </li>
                                <li className={`list-group-item d-flex justify-content-center align-items-center ${props.mode === 'dark' ? 'bg-dark text-white' : ''}`}>
                                    <div className="container ms-2 me-auto">
                                        <div className="fw-bold">Height:</div>
                                        {formatSize(props.pokemon.height)} m
                                    </div>
                                </li>
                                <li className={`list-group-item d-flex justify-content-center align-items-center ${props.mode === 'dark' ? 'bg-dark text-white' : ''}`}>
                                    <div className="container ms-2 me-auto">
                                        <div className="fw-bold">Weight:</div>
                                        {formatSize(props.pokemon.weight)} kg
                                    </div>
                                </li>
                                <li className={`list-group-item d-flex justify-content-center align-items-center ${props.mode === 'dark' ? 'bg-dark text-white' : ''}`}>
                                    <div className="container ms-2 me-auto">
                                        <div className="fw-bold">Types:</div>
                                        <div className='row pb-4' align="center">
                                            {props.pokemon.types.map(item =>
                                            <div className='col-md-6 col-md-offset-1' key={item.type.name}>
                                                <img src={typeImg(item.type.name)} alt={capitalizeFirstLetter(item.type.name)} title={capitalizeFirstLetter(item.type.name)} style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                                                {capitalizeFirstLetter(item.type.name)}
                                            </div>
                                            )}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant={props.mode === 'light' ? 'dark' : 'secondary'} onClick={closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalPokemon;