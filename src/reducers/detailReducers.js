// DETAIL Reducer

const detailState = {}

export default (state = detailState ,action) => {
    switch (action.type) {
        case 'ADD_DETAIL':
            return {
                ...action.detail,
            };
        // case 'SET_GAME':
        //     return action.games;
        default:
            return state;
    }
}