import {combineReducers} from "redux";
import transactionReducer from "./TransactionReducer";

export default combineReducers({
    transaction: transactionReducer,
});