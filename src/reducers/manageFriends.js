export function manageFriends(state = { friends: [] }, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      state.friends.push(action.friend)
      return state
    case 'REMOVE_FRIEND':
      return { friends: state.friends.filter((friend) => friend.id != action.id) }
    default:
      return state
  }
}
