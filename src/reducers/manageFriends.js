export function manageFriends(state = {friends: []}, action){

    switch (action.type){
        case "ADD_FRIEND":
            console.log(state)
            let test = ({...state, friends: [...state.friends, action.friend]})
            console.log(test);
            return test;

        case "REMOVE_FRIEND":
        const removalIndex = state.friends.findIndex(friend => friend.id === action.id);

            return ({...state, friends: [...state.friends.slice(0, removalIndex), ...state.friends.slice(removalIndex + 1)]})

        default: 
            return state;
    }
}
