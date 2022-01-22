import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

class InputWeight extends React.Component {

    state = {
        date: new Date(),
        num: 100
    }

    changeNum = i => e => {
                this.setState({num: Number(e.target.value)})
            }

    changeDate = i => e => {
        console.log(e)
        this.setState({date: new Date(e)})
    }

  handleSubmit = e => {

    this.props.addWeight({
      date: this.state.date,
      value: this.state.num
    })


    this.setState({num: 50})
  }

render() {
  return (
    <Container>
        <Row>
        <input
                type="number"
                min={0}
                max={99999}
                step={1}
                onChange={this.changeNum()}
                value={this.state.num}
            />
        </Row>
           
        <Row> 
      <DatePicker
        onChange={this.changeDate() }
        value={this.state.date}
      />
      </Row>

      <Row> 
        <Button variant="primary" onClick={() => this.handleSubmit()}>Enter</Button>
      </Row>


      
    </Container>
  );
    }
}

export default InputWeight;