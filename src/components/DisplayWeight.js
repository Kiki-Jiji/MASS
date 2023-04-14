import React from 'react';
import Container from 'react-bootstrap/Container'
import './DisplayWeight.css'
import Row from 'react-bootstrap/Row'

import Plot from 'react-plotly.js';

class DisplayWeight extends React.Component {

    create_data(weightTB) {
        
      console.log(weightTB)

        const weightData = weightTB.map(x => {
            return (
                {
                    x: x.date,
                    y: x.weight
                }
            )
        })

        const data =  {
            datasets: [
              {
                data: weightData
            }
          ]
          };


          const options = {
            response: true,
            scales: {
              x: {
                type: "time",
                time: {
                  unit: "day"
                }
              }
            }
          };

        return({
            data: data,
            options: options
        })
    }

  

    render() {

      console.log(this.props.weight)

        let dates = []
        let values = []

        for (let i of this.props.weight) {
          dates.push(i.date)
          values.push(i.value)
        }


        return (
            <Container className = "chart">
                <h2> View Weight </h2>
                <Row> 
              <Plot
                  data={[
                    {
                      x: dates,
                      y: values,
                      type: 'scatter',
                      mode: 'lines+markers',
                      marker: {color: 'red'},
                    }
                  ]}
                  layout={ {title: 'A Fancy Plot',
                  showlegend: false,
                  showgrid: false,
                  paper_bgcolor: 'rgba(0,0,0,0)',
                  plot_bgcolor: 'rgba(0,0,0,0)',
                  xaxis: {
                    showgrid: false
                  }
                } }
                config= {
                  {responsive: true}
                }
             
              />
              </Row> 
            </Container>


        )
    }

}

export default DisplayWeight;



