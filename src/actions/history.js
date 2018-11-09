import database from '../firebase/firebase';

// ACTIONS
// ADD GAME
export const addGame = (game) => ({
    type: 'ADD_GAME',
    game
})
// START ADD GAME
export const startAddGame = (gameData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const  {
            id, 
            imgId,
             rating, 
             cover = '',
        } = gameData;
        const game =  {id, imgId, rating, cover};
        return database.ref(`users/${uid}/history`).push(game).then(() => {
            dispatch(addGame({
                ...game,
            }))
        })
    }
}

// SET GAME
export const setGames = (games) => ({
    type: 'SET_GAME',
    games
})

export const startSetGames = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/history`).once('value').then((snapshot) => {
            const games = [];

            snapshot.forEach((childSnapshot) => {
                games.push({
                    ...childSnapshot.val()
                })
            });

            dispatch(setGames(games));
        });
    }
}