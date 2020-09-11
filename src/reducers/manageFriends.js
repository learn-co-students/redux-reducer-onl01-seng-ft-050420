export function manageFriends(state, action) {
  //   let state = state || { friends: [] };

  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      let ele = state.friends.find((x) => x.id === action.id);
      let index = state.friends.indexOf(ele);
      let newState = { ...state, friends: [...state.friends] };
      newState.friends.splice(index, 1);
      return newState;
    default:
      return state;
  }
}
