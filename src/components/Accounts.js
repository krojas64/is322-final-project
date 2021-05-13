import React from 'react';
import CreateTransaction from './CreateTransaction';
import { connect } from 'react-redux';
import './Accounts.css';

class Accounts extends React.Component {
    render() {
        console.log(this.props.accounts)
        return (
            <div className="accounts-page">
                <div className="container">
                    <div className="row">
                        <div className="col border">
                            <div className="row">
                                <div className="col">
                                    <div className="account-name bg-info rounded">
                                        {this.props.accounts[0].name} 
                                    </div>
                                    <div className="balance">
                                        Balance: {this.props.accounts[0].balance}
                                    </div>
                                </div>
                                <div className="col">
                                    <CreateTransaction id={this.props.accounts[0].id} />
                                </div>
                            </div>
                        </div>
                        <div className="col border">
                            <div className="row">
                                <div className="col">
                                    <div className="account-name bg-info rounded">
                                        {this.props.accounts[1].name} 
                                    </div>
                                    <div className="balance">
                                        Balance: {this.props.accounts[1].balance}
                                    </div>
                                </div>
                                <div className="col">
                                    <CreateTransaction id={this.props.accounts[1].id} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col border">
                            <div className="row">
                                <div className="col">
                                    <div className="account-name bg-info rounded">
                                        {this.props.accounts[2].name} 
                                    </div>
                                    <div className="balance">
                                        Balance: {this.props.accounts[2].balance}
                                    </div>
                                </div>
                                <div className="col">
                                    <CreateTransaction id={this.props.accounts[2].id} />
                                </div>
                            </div>
                        </div>
                        <div className="col border">
                            <div className="row">
                                <div className="col">
                                    <div className="account-name bg-info rounded">
                                        {this.props.accounts[3].name} 
                                    </div>
                                    <div className="balance">
                                        Balance: {this.props.accounts[3].balance}
                                    </div>
                                </div>
                                <div className="col">
                                    <CreateTransaction id={this.props.accounts[3].id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.transaction.accounts
    };
};

export default connect(mapStateToProps)(Accounts);