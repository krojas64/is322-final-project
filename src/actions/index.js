export const AddTransaction = (reason, id, amount) => {
    return {
        type: 'ADD_TRANSACTION',
        payload: {
            reason, id, amount,
        }
    }
};