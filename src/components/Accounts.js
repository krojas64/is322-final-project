import React from 'react';
import axios from 'axios';

class Accounts extends React.Component {
    state = {
        accounts: [],
        errorMessage: '',
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get('https://my-json-server.typicode.com/krojas64/final-db/accounts')
        .then(response => {
            this.setState({ accounts: response.data });
            console.log(this.state.accounts);
        }).catch(error => {
            this.setState({ errorMessage: error.message });
        });
    }


    render () {
        return (
            <div className="accounts-page">
                <h3>THIS IS THE ACCOUNTS PAGE</h3>
                <ul>
                    <li>FAKE LINK 1</li>
                    <li>FAKE LINK 2</li>
                </ul>
            </div>
        )
    }
}

export default Accounts;