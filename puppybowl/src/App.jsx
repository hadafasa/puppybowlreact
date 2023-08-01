import { useState } from 'react';
import AllPlayers from './components/AllPlayers';
import NewPlayerForm from './components/NewPlayerForm';
import './App.css';

const App = () => {
    const [refreshKey, setRefreshKey] = useState(0);

    const handleNewPlayer = () => {
        setRefreshKey(oldKey => oldKey + 1);
    };

    return (
        <div>
            <div id="roster-container">
                <AllPlayers key={refreshKey} />
            </div>
            <div id="form-container">
                <NewPlayerForm onNewPlayer={handleNewPlayer} />
            </div>
        </div>
    );
};

export default App;
