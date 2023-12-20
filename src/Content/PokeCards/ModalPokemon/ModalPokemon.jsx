import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalPokemon(props){
    const [modalIsOpen, setIsOpen] = useState(true);

    function closeModal() {
        setIsOpen(false);
        props.setClickedPokemon({});
    }

    function pokemonNameF(name) {
        console.log(props.pokemon);
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return (
        <>
            <Modal contentClassName={props.mode === 'light' ? 'bg-light' : 'bg-secondary'} show={modalIsOpen} size='lg' onHide={closeModal} bg={props.mode === 'light' ? 'light' : 'secondary'} centered>
                <Modal.Header closeButton>
                    <Modal.Title className='ms-auto'># {props.pokemon.pkdex_number} - {pokemonNameF(props.pokemon.name)}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className='row container'>
                        <div className='col container'>
                            <img src={props.pokemon.img} alt={pokemonNameF(props.pokemon.name)} />
                        </div>
                        <div className='col container'>
                            <h5>Basic Info</h5>
                            <p>{pokemonNameF(props.pokemon.name)}</p>
                            <p>{props.pokemon.pkdex_number}</p>
                            <p>{props.pokemon.height}</p>
                            <p>{props.pokemon.weight}</p>
                            <p>{props.pokemon.types.map(type => type.type.name)}</p>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="dark" onClick={closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalPokemon;