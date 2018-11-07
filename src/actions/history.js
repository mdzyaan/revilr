// ACTIONS
// ADD GAME
export const addGame = ({id, imgId, rating}= {}) => ({
    type: 'ADD_GAME',
    game: {
        id,
        imgId,
        rating
    }
})