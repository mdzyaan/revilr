// HISTORY Reducer

const historyState = []

export default (state = historyState ,action) => {
    switch (action.type) {
        case 'ADD_GAME':
            return [
                ...state,
                action.game
            ];
        case 'SET_GAME':
            return action.games.reverse();
        default:
            return state;
    }
}

