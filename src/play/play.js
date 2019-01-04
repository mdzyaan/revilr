// 1. count the character in the string

// function countChar(strs) {
//     var results = {};
//     for (var char of strs) {
//         var char = char.toLowerCase()    ;
//         (results[char] >  0) ?  results[char] += 1 :   results[char] = 1;
//     }
//     return results
// }

// 2. same  of the sq 

// function same(arr1, arr2) {
//     for (var i =0;i < arr1.length; i++) {
//         const index = arr2.indexOf(arr1[i] **2);
//         if (index === -1) {
//             return false;
//         }  
//         arr2.splice(index,1);
//     }
//     return true
// }
// console.log(same([1,2,3],[1,4,9]))

// 3.  factorial of number;

// function factorial(num) {
//     let total = num;
//     for (let i = num; i > 1; i--) {
//         total *= (i-1) ;        
//     }
//     return total
// }

// console.log(factorial(10))

// 4.  factorial of number using RECURSION;

// function factorial(num) {
//     if (num === 1) return 1;
//     return num * factorial(num -1);
// }

// console.log(factorial(4))

// 5. is prime number?

// function isPrime(num) {
//     if (num%2 === 0) {
//         return false
//     }
//     for (let i = 2; i < num; i++) {
//         if ((num%i) === 0){
//             return false;
//         }  
//     }
//     return true;
// }

// console.log(isPrime(27));

// 6. sum of prime number with RECURSION?

function sumPrime(num) {
    let total = [];
    function isPrime(num,i) {
        if (num <= i) return true
        if (num%i === 0) return true;
        
        i++;
        isPrime(num,i);
    }
    const count = 3;
    function collect(i) {
        if (i >= num) return true;
        if (isPrime(i,2) === true) {
            total.push(i);
        }  
        i+=2
        collect(i);
    }
    collect(count)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    //return (total.length > 0) ? total.reduce(reducer) : "0";
    return total;
}

console.log(sumPrime(10));


// import {createStore, combineReducers} from 'redux';
// // ACTIONS
// // ADD GAME
// const addGame = ({id, imgURL, rating}= {}) => ({
//     type: 'ADD_GAME',
//     game: {
//         id,
//         imgURL,
//         rating
//     }
// })

// // HISTORY Reducer

// const historyState = []

// const historyReducer = (state = historyState ,action) => {
//     switch (action.type) {
//         case 'ADD_GAME':
//             return [
//                 ...state,
//                 action.game
//             ];
//         default:
//             return state;
//     }
// }

// // Store Creation

// const store = createStore(
//     combineReducers({
//         history: historyReducer
//     })
// );

// store.subscribe(() => {
//     console.log(store.getState().history);
// });

// store.dispatch(addGame({
//     id: 27,
//     imgURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/.jpg",
//     rating: 91
// }));

// store.dispatch(addGame({
//     id: 9992,
//     imgURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/.jpg",
//     rating: 0
// }));
// // demo input
// const demoState = {
//     gameList: [{
//         id: 27,
//         name: "Red dead Redemption",
//         imgURL: "https://images.igdb.com/igdb/image/upload/t_cover_big/.jpg",
//         rating: 91
//     }]
// }