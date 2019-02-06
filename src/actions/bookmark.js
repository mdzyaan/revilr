import database from '../firebase/firebase';

export const addToBookmark = (game={}) => ({
    type: 'ADD_TO_BOOKMARK',
    game,
})

export const startAddToBookmark = (gameData={}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const  {
            id, 
            imgId,
            rating, 
            name,
            cover = '',
            bookmark,
        } = gameData;
        const game =  {id, imgId, name, rating, cover,bookmark};
        return database.ref(`users/${uid}/bookmark`).push().then((ref) => {
            database.ref(`users/${uid}/bookmark/${ref.key}`).set({key: ref.key,...game})
            dispatch(addToBookmark({
                key: ref.key,
                ...game,
            }))
        })
    }
}


export const removeFromBookmark = key => ({
    type: 'REMOVE_FROM_BOOKMARK',
    key,
})

export const startRemoveFromBookmark = key => {

    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/bookmark/${key}`).remove().then(() => {
            dispatch(removeFromBookmark(key));
        })
    }
}





// SET GAME
export const setBookmarkGame = (games) => ({
    type: 'SET_BOOKMARK_GAME',
    games
})

export const startSetBookmarkGames = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/bookmark`).once('value').then((snapshot) => {
            const games = [];

            snapshot.forEach((childSnapshot) => {
                games.push({
                    ...childSnapshot.val()
                })
            });

            dispatch(setBookmarkGame(games));
        });
    }
}