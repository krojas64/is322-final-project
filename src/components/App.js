import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';


import Tabs from './Tabs';
import Accounts from './Accounts';
import Transactions from './Transactions';
import PersonalTransaction from './PersonalTransaction';

class App extends React.Component {
    state = {
        accounts: [],
        transactions: [],
        errorMessage: '',
    }

    /*componentDidMount() {
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

        axios.get('https://my-json-server.typicode.com/krojas64/final-db/transactions')
        .then(response => {
            this.setState({ transactions: response.data });
            console.log(this.state.transactions);
        }).catch(error => {
            this.setState({ errorMessage: error.message });
        });
    }*/

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Tabs />
                    <div>
                        <Route path="/" exact component={Accounts} />
                        <Route path="/transactions" component={Transactions} />
                        <Route path="/page/:id" component={PersonalTransaction} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;