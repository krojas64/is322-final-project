export const AddTransaction = (name, amount) => {
    return {
        type: 'ADD_TRANSACTION',
        payload: {
            name, amount,
        }
    }
};