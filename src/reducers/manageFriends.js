export function manageFriends(state, action){
    // let state = {
    //     friends: []
    // }
    // let action = {
    //     type: 'ADD_FRIEND',
    //     friend: {
    //         name: 'Chrome Boi',
    //         hometown: "NYC",
    //         id: 1
    //     }
    // }
    switch (action.type) {
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            let index = state.friends.findIndex(friend => friend.id === action.id)
            let friends2 = [...state.friends]
            friends2.splice(index, 1)
            return {friends: friends2}
        default:
            return state
    }
}
