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
                    <div className="row">
                        <div className="col">
                            <Link to={`page/${char.id}`}>{char.name}</Link>  
                        </div>
                        <div className="col">
                            Reason: {char.reason}
                        </div>
                        <div className="col">
                            Amount:  
                            <div className="amount badge badge-info badge-pull">
                            {char.amount}
                            </div>
                        </div>
                    </div>
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