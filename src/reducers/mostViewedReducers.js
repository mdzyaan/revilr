// mostViewed Reducer

const mostViewedState = []

export default (state = mostViewedState ,action) => {
    switch (action.type) {
        case 'ADD_GAME_TO_MOST_VIEWED':
            const id = state.findIndex(el => el.id === action.game.id);
            if (id > -1) {
                let data = state[id];
                data.count += 1
                state.splice(id,1)  
                return  [...state,data];
            } else {
                return [
                    ...state, {
                        count: 1,
                        ...action.game
                    }
                ]
            }
        case 'SET_GAME_MOST_VIEWED':
            return action.game
        default:
            return state;
    }
}

