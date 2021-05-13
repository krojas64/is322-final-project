import React from 'react';
import CreateTransaction from './CreateTransaction';
import { connect } from 'react-redux';
import { render } from '@testing-library/react';

class PersonalTransaction extends React.Component {

    returnAccount = () => {
        let currentID = this.props.match.params.id;
        let accountList = this.props.accounts;
        let retAcc = []
        accountList.forEach((item) => {
            console.log(item);
            if (currentID === String(item.id)){
                console.log("Reached here!")
                retAcc = [item.name, item.id, item.balance];
            }
        })
        return retAcc;
    }


    render() {
        let TransactionList = this.props.transactions;
        let currentID = this.props.match.params.id;
        let currentAcc = this.returnAccount();
        console.log(currentAcc);
        console.log(this.props.match.params.id)
        console.log(this.props.accounts)
        return (
            <div className="personal-page">
                <div className="row">
                    <div className="col">
                        <div className="account-name">
                            {currentAcc[0]}
                        </div>
                        <div className="balance">
                            Balance: {currentAcc[2]}
                        </div>
                    </div>
                    <div className="col">
                        <CreateTransaction />
                    </div>
                </div>
                <div className="row">
                    
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