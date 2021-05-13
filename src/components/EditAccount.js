import React from 'react';
import { connect } from "react-redux";


class EditAccount extends React.Component {
    render() {
        return (
            <h3>The edit page for account {this.props.match.params.id}</h3>
        )
    }

}

const mapStateToProps = state => {
    return {
        accounts: state.transaction.accounts,
        transactions: state.transaction.transactions
    };
};

export default connect(mapStateToProps)(EditAccount);