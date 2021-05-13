const DEFAULT_STATE = {
    current: 0,
    numCharacter: 9,
};

const turnReducer = (state = DEFAULT_STATE, action) => {
    let newState = {...state};
    
    switch (action.type) {
        case 'ADD_CHARACTER':
            newState.numCharacter += 1;
            return newState;

        case 'REMOVE_CHARACTER':
            newState.numCharacter -= 1;
            return newState;

        case 'NEXT_TURN':
            newState.current += 1;
            if (newState.current === newState.numCharacter) {
                newState.current = 0;
            }
            return newState;

        case 'PREV_TURN':
            newState.current -= 1;
            if (newState.current === -1) {
                newState.current = newState.numCharacter;
            }
            return newState;

        default:
            return state;
    }
}

export default turnReducer;