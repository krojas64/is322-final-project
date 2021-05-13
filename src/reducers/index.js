import {combineReducers} from "redux";
import transactionReducer from "./TransactionReducer";
import turnReducer from "./turnReducer";

export default combineReducers({
    transaction: transactionReducer,
    turn: turnReducer,
});