import React from 'react';
import CreateTransaction from './CreateTransaction';
import { connect } from 'react-redux';

class PersonalTransaction extends React.Component {
    render() {
        console.log(this.props.match.params.id)
        console.log(this.props.accounts)
        return (
            <div className="personal-page">
                <h3>This is the page for account number {this.props.match.params.id}</h3>
                <div className="row">
                    <div className="col">
                        <div className="account-name">
                            {this.props.accounts[0].name} 
                        </div>
                        <div className="balance">
                            Balance: {this.props.accounts[0].balance}
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