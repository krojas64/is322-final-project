import axios from 'axios';

/*const db_account = async () => {
    let accounts_data;
    try {
    accounts_data = await axios.get('https://my-json-server.typicode.com/krojas64/final-db/accounts')
    if (accounts_data.status === 200){
    console.log(accounts_data)
    console.log(accounts_data.data)
    return accounts_data.data;
    }
    } catch (err) {
        console.error(err)
    }
    return;
};*/

const db_transaction = async () => {
    let transactions = await axios.get('https://my-json-server.typicode.com/krojas64/final-db/transactions');

    return transactions;
}

const DEFAULT_STATE = {
    //accounts: db_account()
    accounts: [
        { "name": "Joe G.", "id": 3, "balance": 354.52 },
        { "name": "Vivian E.", "id": 4, "balance": 5331.00 },
        { "name": "George L.", "id": 2, "balance": 745.48 },
        { "name": "Zoey A.", "id": 1, "balance": 1644.17 }
    ],
    transactions: db_transaction()
    /*transactions: [
        { "name": "Joe G.", "id": 3, "reason": "Opened Account", "amount": 354.52 },
        { "name": "Vivian E.", "id": 4, "reason": "Opened Account", "amount": 5331.00 },
        { "name": "George L.", "id": 2, "reason": "Opened Account", "amount": 745.48 },
        { "name": "Zoey A.", "id": 1, "reason": "Opened Account", "amount": 1644.17 }
    ]*/
};

const transactionReducer = (state = DEFAULT_STATE, action) => {
    let newState = {...state};
    console.log(newState)
    switch (action.type) {
        case 'ADD_TRANSACTION_DEPOSIT':
            const transaction = action.payload;
            const {id} = action.payload;
            //console.log(transaction);
            //console.log(id);
            const acct = state.accounts.find(act => String(act.id) === String(id));
            console.log(acct);
            //console.log(state.transactions);
            //console.log(acct.name);
            transaction.name = acct.name;
            state.transactions.push(transaction);
            const idx = state.accounts.findIndex(act => String(act.id) === String(id));
            console.log(idx);
            state.accounts[idx].balance += parseFloat(transaction.amount);
            console.log(state);
            return state;
        case 'ADD_TRANSACTION_WITHDRAW':

        default:
            return state;
    }
}

export default transactionReducer;