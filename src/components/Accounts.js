import React from 'react';
import CreateTransaction from './CreateTransaction';


const Accounts = props => {
    return (
        <div className="accounts-page">
            <h3>THIS IS THE ACCOUNTS PAGE</h3>
            <div className="container">
                <div className="row">
                    <div className="col border">
                        <div className="row">
                            <div className="col-xs-6">
                                First
                            </div>
                            <div className="col-xs-6">
                                <CreateTransaction />
                            </div>
                        </div>
                    </div>
                    <div className="col border">
                        <div className="row">
                            <div className="col-xs-6">
                                Second
                            </div>
                            <div className="col-xs-6">
                                <CreateTransaction />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col border">
                        <div className="row">
                            <div className="col-xs-6">
                                Third
                            </div>
                            <div className="col-xs-6">
                                <CreateTransaction />
                            </div>
                        </div>
                    </div>
                    <div className="col border">
                        <div className="row">
                            <div className="col-xs-6">
                                Fourth
                            </div>
                            <div className="col-xs-6">
                                <CreateTransaction />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accounts;