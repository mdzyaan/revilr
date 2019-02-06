const initialBookmarkState = [];


export default (state = initialBookmarkState, action) => {
    switch (action.type) {
        case 'ADD_TO_BOOKMARK':
            // add the new game with the existing state
            return [
                ...state,
                action.game,
            ]
        case 'REMOVE_FROM_BOOKMARK':
            // find the index of the element to be removed
            const id = state.findIndex(el => {
                return el.key === action.key
            });
            // splice up
            state.splice(id,1)  
            // return the updated state
            return  [...state];
        case 'SET_BOOKMARK_GAME':
            // retrieve the data from database as application boots up
            return action.games
        default:
            return state;
    }
}