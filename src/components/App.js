import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Tabs from './Tabs';
import Accounts from './Accounts';
import Transactions from './Transactions';
import PersonalTransaction from './PersonalTransaction';

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Tabs />
                <div>
                    <Route path="/" exact component={Accounts} />
                    <Route path="/transactions" exact component={Transactions} />
                    <Route path="/page/:id" component={PersonalTransaction} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;