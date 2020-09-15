export function manageFriends(state, action){
}


function manageFriends(prevState={friends: []}, action) {
    switch(action.type) {
        case 'ADD_FRIEND':
            return ({...prevState, friends: [
                ...prevState.friends, action.friend
            ]})
        case 'REMOVE_FRIEND': 
        const removeFriend = prevState.friends.findIndex(friend => friend.id === action.id)
            return ({...prevState, friends: [
                ...prevState.friends.slice(0, removeFriend),
                ...prevState.friends.slice(removeFriend + 1)
            ] })
            default:
                return prevState
    }
}