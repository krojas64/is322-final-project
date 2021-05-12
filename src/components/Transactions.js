import React from 'react';
import { Link } from 'react-router-dom';

const Transactions = props => {
    return (
        <div className="transactions-page">
            <h3>TRANSACTIONS WILL BE DONE HERE!</h3>
            <ul>
                <li>FAKE LINK 5</li>
                <li>FAKE LINK 6</li>
                <li><Link to={'page/1'}>Page 1</Link></li>
            </ul>
        </div>
    )
}

export default Transactions;