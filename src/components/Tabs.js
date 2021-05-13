import React from 'react';
import { Link } from 'react-router-dom';
import './Tabs.css';

class Tabs extends React.Component {
    state = { currentPage: '/' }

    isActiveTab(tabName) {
        return (tabName === this.state.currentPage) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tabName) {
        this.setState({currentPage: tabName})
    }

    render () {
        return (
            <ul className='nav page-tabs'>
                <li className='nav-item'>
                    <div className='bank-name bg-success rounded'>
                    First Bank of Fleeca
                    </div>
                </li>
                <li className='nav-item'>
                    <Link className={this.isActiveTab('/')} to='/'
                        onClick={event => this.onTabClick(event, '/')}>
                        Accounts
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className={this.isActiveTab('/transactions')} to='/transactions'
                        onClick={event => this.onTabClick(event, '/transactions')}>
                        Transactions
                    </Link>
                </li>
            </ul>
        )
    }
};

export default Tabs;