import React from 'react';

class PersonalTransaction extends React.Component {

    render() {
        console.log(this.props);
        console.log(this.props.match.params.id)
        return (
            <div className="personal-page">
                <h3>This is the page for account number {this.props.match.params.id}</h3>
            </div>
        )
    }
}

export default PersonalTransaction;