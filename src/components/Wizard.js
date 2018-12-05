import React from 'react';
import StepRenderer from './StepRenderer';

class Wizard extends React.Component {
    state = {
        currentStep: 0
    }

    handleNextStepBtn = () => {
        if (this.state.currentStep < this.props.steps.length - 1) {
            this.setState(prevState => ({currentStep: prevState.currentStep + 1}))
        }        
    }

    handlePrevStepBtn = () => {
        if (this.state.currentStep > 0) {
            this.setState(prevState => ({currentStep: prevState.currentStep - 1}))
        } 
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <button onClick={this.handlePrevStepBtn}>Previous Step</button>
                    {this.state.currentStep}
                    <button onClick={this.handleNextStepBtn}>Next Step</button>
                </header>
                <StepRenderer>
                    {this.props.steps[this.state.currentStep].component}
                </StepRenderer>
            </React.Fragment>
        )
    }
}

export default Wizard;