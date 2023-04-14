import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import {HashRouter,Link,Route,Switch} from "react-router-dom";

import './inputStyles.css'

class InputWeight extends React.Component {

    state = {
      "date": new Date(this.props.lastWeight.date),
      "value": this.props.lastWeight.value
    }

    changeNum = i => e => {
                this.setState({value: Number(e.target.value)})
            }

    changeDate = i => e => {
        this.setState({date: new Date(e)})
    }

  handleSubmit = e => {

    let date = this.state.date
    const date_string = date.toISOString().slice(0,10)

    this.props.addWeight({
      date: date_string,
      value: this.state.value
    })
  }

render() {
  return (
    <Container className = "inputter">
        <Row >
        <input className = "weightInput inputBackGround"
                type="number"
                min={0}
                max={99999}
                step={1}
                onChange={this.changeNum()}
                value={this.state.value}
            />
        </Row>
           
        <Row> 
      <DatePicker className = "dateRow inputBackGround"
        onChange={this.changeDate() }
        value={this.state.date}
      />
      </Row>

      <Row > 
        <Button variant="primary" onClick={() => this.handleSubmit()}>Enter</Button>
      </Row>

    <br/>
      
    </Container>
  );
    }
}

export default InputWeight;