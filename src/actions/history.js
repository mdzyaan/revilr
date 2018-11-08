import database from '../firebase/firebase';

// ACTIONS
// ADD GAME
export const addGame = (game) => ({
    type: 'ADD_GAME',
    game
})

export const startAddGame = (gameData = {}) => {
    return (dispatch) => {
        const  {
            id, 
            imgId,
             rating, 
             cover = '',
        } = gameData;
        const game =  {id, imgId, rating, cover};
        return database.ref('history').push(game).then(() => {
            dispatch(addGame({
                ...game,
            }))
        })
    }
}