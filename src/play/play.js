import {createStore, combineReducers} from 'redux';
// ACTIONS
// ADD GAME
const addGame = ({id, imgURL, rating}= {}) => ({
    type: 'ADD_GAME',
    game: {
        id,
        imgURL,
        rating
    }
})

// HISTORY Reducer

const historyState = []

const historyReducer = (state = historyState ,action) => {
    switch (action.type) {
        case 'ADD_GAME':
            return [
                ...state,
                action.game
            ];
        default:
            return state;
    }
}

// Store Creation

const store = createStore(
    combineReducers({
        history: historyReducer
    })
);

store.subscribe(() => {
    console.log(store.getState().history);
});

store.dispatch(addGame({
    id: 27,
    imgURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/.jpg",
    rating: 91
}));

store.dispatch(addGame({
    id: 9992,
    imgURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/.jpg",
    rating: 0
}));
// demo input
const demoState = {
    gameList: [{
        id: 27,
        name: "Red dead Redemption",
        imgURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/.jpg",
        rating: 91
    }]
}