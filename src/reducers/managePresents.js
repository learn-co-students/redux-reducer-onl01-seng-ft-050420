export function managePresents(state, action){
    // state = {numberOfPresents: 0}
    // action = {
    //     type: 'INCREASE'
    // }

    if (action.type === 'INCREASE'){
        return {numberOfPresents: state.numberOfPresents + 1}
    } else {
        return state
    }
}
