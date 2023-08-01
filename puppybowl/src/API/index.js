const cohortName = "2302-ACC-CT-WEB-PT-X";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players/`;

// function to fetch all players from api
export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(APIURL);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

// function to fetch a single player from the api by its id
export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}${playerId}`);
        const player = await response.json();
        console.log(player);
        return player;
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

// function to add a new player using the api
export const addNewPlayer = async (playerObj) => {
    try {
        const response = await fetch(APIURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(playerObj),
        });
        
        const newPlayer = await response.json();
        
        // checks if the api response indicates success
        if (newPlayer.success) {
            // return success
            return true;
        } else {
            console.error('Failed to add player:', newPlayer.error);
        }
        
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

// function to remove a player via the api
export const removePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}${playerId}`, {
            method: 'DELETE',
        });
        // if response is good, re-renders the players
        if (response.ok) {
            return true;
        } else {
            console.error('Failed to delete player:'. response.statusText);
        }
    } catch (err) {
        console.error(`Error removing player #${playerId} from the roster!`, err);
    }
}