import React from 'react';

class Wizard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    Previous Step - Steps - Next Step
                </header>
                <main>
                    Current step content
                </main>
            </React.Fragment>
        )
    }
}

export default Wizard;