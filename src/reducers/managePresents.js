export function managePresents(state, action){
}

function managePresents(prevState={numberOfPresents: 0}, action) {
    switch (action.type) {
        case 'INCREASE':
            return {numberOfPresents: prevState.numberOfPresents + 1}
            default:
                return prevState
    }
}