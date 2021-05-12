const DEFAULT_STATE = {
    current: 0,
    numCharacter: 9,
};

const transactionReducer = (state = DEFAULT_STATE, action) => {
    let newState = {...state};
    
    switch (action.type) {
        case 'ADD_TRANSACTION':
            newState.numCharacter += 1;
            return newState;


        default:
            return state;
    }
}

export default transactionReducer;