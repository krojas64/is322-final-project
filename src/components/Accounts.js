import React from 'react';
import CreateTransaction from './CreateTransaction';
import { connect } from 'react-redux';
import './Accounts.css';

class Accounts extends React.Component {
    render() {
        let accountList = this.props.accounts;
        console.log(this.props.accounts)
        return accountList.map((char,index) => {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col border">
                            <div className="row">
                                <div className="col">
                                    <div className="account-name bg-info rounded">
                                        {char.name} 
                                    </div>
                                    <div className="balance">
                                        Balance: {char.balance}
                                    </div>
                                </div>
                                <div className="col">
                                    <CreateTransaction id={char.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.transaction.accounts
    };
};

export default connect(mapStateToProps)(Accounts);