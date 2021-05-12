import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Tabs from './Tabs';
import Accounts from './Accounts';
import Transactions from './Transactions';

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Tabs />
                <div>
                    <Route path="/" exact component={Accounts} />
                    <Route path="/transactions" exact component={Transactions} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;