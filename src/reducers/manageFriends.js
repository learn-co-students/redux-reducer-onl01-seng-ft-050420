export function manageFriends(state, action){
     switch (action.type) {
         case 'ADD_FRIEND':
             
             return {friends: [...state.friends, action.friend ]}
                 //returns a copy of all the friends already by using the spread operator
                 //then it performs the actions of the friends added onto this
                 //the whole thing in an array is put together and returned
                
                    
             case 'REMOVE_FRIEND':
                let friendsWithoutDeletedFriends = 
                  [...state.friends].filter((friendId) => friendId.id !== action.id)
                  //make a copy of the friends with the spread operator, and write a condition with filter
                  //for whichever friends the statement is true then return those
                  //the statement here reads that the  friends id does not match the action's id when called on then
                  //return those
                  //this means it will exclude the friendId that matches the action id
                  //now return a new friend object with this logic in place which the logic does not include the deleted friend
                  return {friends: friendsWithoutDeletedFriends}
                  default:
                 return state;

     }
    }

// function reducer(state, action){      
//   switch (action.type) {
//     case 'INCREASE_COUNT':
//       return {count: state.count + 1}
//     case 'DECREASE_COUNT':
//       return {count: state.count - 1}
//     default:
//       return state;
//   }
// }
//{friend: {name:state.name, hometown:"", id:""}}