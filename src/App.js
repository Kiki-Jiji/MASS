import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {LandingPage, InputWeight, DisplayWeight} from './components'

class App extends React.Component {

  state = {
    weight: [
      {
      date: new Date("2020-01-01"),
      value: 100.2
      },
      {
        date: new Date("2020-01-02"),
        value: 102.2
        },
      {
        date: new Date("2020-01-03"),
        value: 105.3
        },
        {
          date: new Date("2020-01-11"),
          value: 104.4
          },
  ]
  }


  addWeight = e => {
    var currentWeights = this.state.weight

    currentWeights.push(e)

      this.setState({weight: currentWeights})
      

  }

  render() {
    return (
      <div className="App">
        <h1>Hi</h1>

        <LandingPage/>

        <InputWeight addWeight={this.addWeight}/>

        <DisplayWeight weight={this.state.weight}/>
      </div>
    )
  }
}

export default App;
