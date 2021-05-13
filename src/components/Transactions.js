import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Transactions extends React.Component {

    render(){
        let TransactionList = this.props.transactions;
        console.log(TransactionList);
        return TransactionList.map((char,index) => {
            return (
                <li className="list-group-item" key={index}>
                    <Link to={`page/${char.id}`}>{char.name}</Link> / Reason: {char.reason} / Amount: {char.amount} {char.id}
                </li>
            );
        });
    }
}

const mapStateToProps = state => {
    return {
        transactions: state.transaction.transactions
    };
};

export default connect(mapStateToProps)(Transactions);