import React from 'react';
import { connect } from "react-redux";

import { AddTransaction } from '../actions';

class CreateTransaction extends React.Component {

    state = {
        name: '',
        amount: '',
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        //this.props.AddTransaction(this.state.name, this.state.amount);
        this.setState({name: '', amount: ''})
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} style={{padding: '0 12px 12px'}}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control"
                        name="name"
                        value={this.state.name}
                        onChange={event => this.setState({name: event.target.value})}>
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

export default CreateTransaction;