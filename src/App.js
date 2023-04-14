import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter,Link,Route,Switch} from "react-router-dom";

import {LandingPage, InputWeight, DisplayWeight} from './components'

class App extends React.Component {

  // state = {
  //   weight: [
  //     {
  //     date: new Date("2022-01-01"),
  //     value: 100
  //     }
  // ]
  // }


  state = {
    weight: [
      {
      date: "2023-04-01",
      value: 100.2
      },
      {
        date: "2023-04-02",
        value: 102.2
        },
      {
        date: "2023-04-03",
        value: 105.3
        },
        {
          date: "2023-04-11",
          value: 104.4
          },
  ]
  }


  addWeight =  e => {

    console.log(e)

    var currentWeights = this.state.weight

    currentWeights.push(e)

    this.setState({weight: currentWeights})
      

  }

  render() {
    return (
      <div className="App">
        <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>

        <h1 className = "AppTitle">⚛️ MASS ⚛️</h1>
        <h2 className = "AppSubTitle"><em>E=mc<sup>2</sup></em></h2>

        <HashRouter>
          <div>
              <Link to="/inputWeight"><h2>Input</h2></Link>
              <Link to="/chart"><h2>Chart</h2></Link>
          </div>
        
        <Switch>
          <Route path="/inputWeight" exact component = {() => <InputWeight addWeight={this.addWeight} lastWeight = {this.state.weight[this.state.weight.length -1]}/>}/>
          <Route path="/chart" exact component = {() => <DisplayWeight weight={this.state.weight}/> }/>
        </Switch>
        </HashRouter>
        
      </div>
    )
  }
}

export default App;
