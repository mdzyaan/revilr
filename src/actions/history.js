// ACTIONS
// ADD GAME
export const addGame = ({id, imgId, rating, cover=''}= {}) => ({
    type: 'ADD_GAME',
    game: {
        id,
        imgId,
        rating,
        cover
    }
})