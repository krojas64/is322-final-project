import React from 'react';
import CreateTransaction from './CreateTransaction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './PersonalTransaction.css';

class PersonalTransaction extends React.Component {

    returnAccount = () => {
        let currentID = this.props.match.params.id;
        let accountList = this.props.accounts;
        let retAcc = [];
        accountList.forEach((item) => {
            console.log(item);
            if (currentID === String(item.id)){
                console.log("Reached here!")
                retAcc = [item.name, item.id, item.balance];
            }
        })
        return retAcc;
    }

    returnTransaction = () => {
        let TransactionList = this.props.transactions;
        let currentID = this.props.match.params.id;
        let retTrans = [];
        TransactionList.forEach((item) => {
            if(currentID === String(item.id)){
                console.log("Hi")
            }
        })
    }


    render() {
        let currentAcc = this.returnAccount();
        console.log(currentAcc);
        console.log(this.props.match.params.id)
        console.log(this.props.accounts)
        return (
            <div className="container">
                <div className="row border">
                    <div className="col">
                        <div className="account-name bg-info rounded">
                            {currentAcc[0]}
                        </div>
                        <div className="identification">
                            ID: {currentAcc[1]}
                        </div>
                        <div className="balance">
                            Balance: {currentAcc[2]}
                        </div>
                    </div>
                    <div className="col">
                        <CreateTransaction id={this.props.match.params.id}/>
                    </div>
                </div>
                <div className="options-holder row border">
                    <div className="options-name col">
                        Account Options: 
                    </div>
                    <div className="options-button col">
                        <Link className="btn btn-primary" to={`edit`}>Edit</Link>
                        <Link className="btn btn-danger" to={'delete'}>Delete</Link>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.transaction.accounts,
        transactions: state.transaction.transactions
    };
};

export default connect(mapStateToProps)(PersonalTransaction);