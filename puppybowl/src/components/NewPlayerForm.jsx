import PropTypes from 'prop-types';
import { useState } from 'react';
import { addNewPlayer } from '../API';

const NewPlayerForm = ({ onNewPlayer }) => {
    
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    
    const handleSubmit = async e => {
        e.preventDefault();
        const success = await addNewPlayer({ name, breed });
        if (success) {
            setName('');
            setBreed('');
            onNewPlayer();
        }
    };

    return (
        <form id="newPlayerForm" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required value={name} onChange={e => setName(e.target.value)} />
            <input type="text" name="breed" placeholder="Breed" required value={breed} onChange={e => setBreed(e.target.value)} />
            <button type="submit">Add Player</button>
        </form>
    );
};

NewPlayerForm.propTypes = {
    onNewPlayer: PropTypes.func.isRequired,
};

export default NewPlayerForm;

