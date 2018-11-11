import database from '../firebase/firebase';

// ACTIONS
// ADD GAME 
export const addGameToMostViewed = (game) => ({
    type: 'ADD_GAME_TO_MOST_VIEWED',
    game
})

export const startAddGameToMostViewed = (gameData = {}) => {
    return (dispatch, getState) => {
        const  {
            id, 
            name,
            imgId,
            rating, 
            cover = '',
        } = gameData;
        const game =  {id, name, imgId, rating, cover};
        dispatch(addGameToMostViewed({
            ...game,
        }))
        const data = getState().mostViewed.sort((a,b) => b.count - a.count)
        return database.ref('MostViewed').set(data)
    }
}

export const setGameMostViewed = (game) => ({
    type: 'SET_GAME_MOST_VIEWED',
    game,
})

export const startSetGameMostViewed = () => {
    return (dispatch) => {
        database.ref('MostViewed').once('value').then((snapshot) => {
            const games = [];
            snapshot.forEach((childSnapshot) => {
                games.push({
                    ...childSnapshot.val()
                })
            });
            dispatch(setGameMostViewed(games));
        });
    }
}