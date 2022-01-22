import React from 'react';
import Container from 'react-bootstrap/Container'

import "chartjs-adapter-moment";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

class DisplayWeight extends React.Component {

    create_data(weightTB) {
        
        const weightData = weightTB.map(x => {
            return (
                {
                    x: x.date,
                    y: x.value
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

        let data = this.create_data(this.props.weight)

        return (
            <Container>
                <h2> View Weight </h2>

                <Line  data={data.data} options={data.options}/>

            </Container>


        )
    }

}

export default DisplayWeight;
