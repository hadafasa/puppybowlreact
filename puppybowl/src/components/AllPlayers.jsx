import { useEffect, useState } from 'react';
import { fetchAllPlayers, removePlayer } from '../API';
import SinglePlayer from './SinglePlayer';

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    useEffect(() => {
        fetchAllPlayers().then(data => setPlayers(data.data.players));
    }, []);

    const handleClickPlayer = id => {
        setSelectedPlayer(id);
    };

    const handleRemovePlayer = id => {
        removePlayer(id);
        setPlayers(players.filter(player => player.id !== id));
    };

    return (
        <div id="playercards">
            {players.map(player => (
                <div className="card" key={player.id}>
                    <img src={player.imageUrl} alt={player.name} width="200" />
                    <p>{player.name}</p>
                    <button onClick={() => handleClickPlayer(player.id)}>See details</button>
                    <button onClick={() => handleRemovePlayer(player.id)}>Remove from Roster</button>
                </div>
            ))}
            {selectedPlayer && <SinglePlayer id={selectedPlayer} onClose={() => setSelectedPlayer(null)} />}
        </div>
    );
}

export default AllPlayers;
