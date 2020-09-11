const state = {friends: [] }
const action = {
    type: "ADD_FRIEND",
    friend: {
        name: "Chrome Boi", 
        hometown: "NYC", 
        id: 1
    } 
}
export function manageFriends(state, action){
    switch(action.type) {
        case "ADD_FRIEND": 
             return Object.assign({}, state, state.friends.push(action.friend))
        case "REMOVE_FRIEND":
            const index = state.friends.findIndex( f => f.id === action.id)
            return( {...state,
                friends: [
                  ...state.friends.slice(0, index),
                  ...state.friends.slice(index + 1)
                ]
            }
          )
        default: 
            return state 
    }
}
