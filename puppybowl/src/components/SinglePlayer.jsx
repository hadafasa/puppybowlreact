import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { fetchSinglePlayer } from '../API';

const SinglePlayer = ({ id, onClose }) => {
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        fetchSinglePlayer(id).then(data => setPlayer(data.data.player));
    }, [id]);

    return (
        <div id="player-smol" style={{ display: player ? 'block' : 'none' }}>
            {player && (
                <div>
                    <div className="player-image">
                        <img src={player.imageUrl} alt={player.name} width="200" />
                    </div>
                    <div className="player-info">
                        <h2>{player.name}</h2>
                        <p>Breed: {player.breed}</p>
                        <p>Status: {player.status}</p>
                    </div>
                    <button onClick={onClose}>Close</button>
                </div>
            )}
        </div>
    );
};

SinglePlayer.propTypes = {
    id: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default SinglePlayer;
