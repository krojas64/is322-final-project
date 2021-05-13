export const AddTransactionDeposit = (reason, id, amount) => {
    return {
        type: 'ADD_TRANSACTION_DEPOSIT',
        payload: {
            reason, id, amount,
        }
    }
};

export const AddTransactionWithdraw = (reason, id, amount) => {
    return {
        type: 'ADD_TRANSACTION_WITHDRAW',
        payload: {
            reason, id, amount,
        }
    }
};