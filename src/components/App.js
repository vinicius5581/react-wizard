import React, { Component } from 'react';
import Wizard from './Wizard';
import DoSomething from './DoSomething';
import DoSomethingElse from './DoSomethingElse';
import DoOneMoreThing from './DoOneMoreThing';
import './App.css';

const steps = [
  {name: 'Do something', component: DoSomething},
  {name: 'Do something else', component: DoSomethingElse},
  {name: 'Do whatever', component: DoOneMoreThing},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wizard 
          steps={steps}
        />
      </div>
    );
  }
}

export default App;
