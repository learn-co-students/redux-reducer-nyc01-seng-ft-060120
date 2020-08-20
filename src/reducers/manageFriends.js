export function manageFriends(state, action){
    switch(action.type) {
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            let index = state.friends.findIndex(friend => friend.id === action.id)
            let allFriends = [...state.friends]
            allFriends.splice(index, 1)
            return  {friends: allFriends}
        default:
            return {friends: state.friends}
    }
}
