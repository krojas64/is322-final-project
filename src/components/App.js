import React from 'react';
//import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';


import Tabs from './Tabs';
import Accounts from './Accounts';
import Transactions from './Transactions';
import PersonalTransaction from './PersonalTransaction';
import EditAccount from './EditAccount';

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Tabs />
                    <div>
                        <Route path="/" exact component={Accounts} />
                        <Route path="/transactions" component={Transactions} />
                        <Route path="/page/:id" component={PersonalTransaction} />
                        <Route path="/page/:id/edit" exact component={EditAccount} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;