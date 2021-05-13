import React from 'react';
import { connect } from "react-redux";

import { AddTransactionDeposit } from '../actions';

class CreateTransaction extends React.Component {

    state = {
        reason: '',
        amount: '',
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.AddTransactionDeposit(this.state.reason, this.props.id, this.state.amount);
        this.setState({reason: '', amount: ''})
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} style={{padding: '0 12px 12px'}}>
                <div className="form-group">
                    <label>Transaction Reason</label>
                    <input type="text" className="form-control"
                        name="reason"
                        value={this.state.reason}
                        onChange={event => this.setState({reason: event.target.value})}>
                    </input>
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input type="text" className="form-control"
                        name="amount"
                        value={this.state.amount}
                        onChange={event => this.setState({amount: event.target.value})}>
                    </input>
                </div>
                <input type="submit" className="btn btn-success" value="Deposit" />
                <input type="submit" className="btn btn-danger float-right" value="Withdraw" />
            </form>
        )
    }
}

export default connect(null, {AddTransactionDeposit})(CreateTransaction);