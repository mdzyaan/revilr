import database from '../firebase/firebase';


// ACTIONS
// ADD DETAILS
export const addDetail = (detail) => ({
    type: 'ADD_DETAIL',
    detail
})
// START ADD DETAIL
export const startAddDetail = (detailData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const  {
            displayName,
            photoURL,
            email,
            phoneNumber = '',
        } = detailData;
        const data =  {displayName, photoURL, email, phoneNumber};
        return database.ref(`users/${uid}/detail`).set(data).then(() => {
            dispatch(addDetail({
                ...data,
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