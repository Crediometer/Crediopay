import styles from './Graph.module.css';
import { Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
} from 'chart.js';
import { FilledInput } from '@mui/material';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement, 
    Filler
)
const Graph = () => {
    const data = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov', 'Dec'],
        datasets: [{
            data:[10,20,30, 42, 51, 82, 31, 59, 67, 79, 83, 54],
            backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 179.63);
                gradient.addColorStop(0, "rgba(215, 215, 215, 0.4)");
                gradient.addColorStop(1, "rgba(255, 255, 255, 0.726)");
                return gradient;
              },
            borderColor: "#7373738A",
            pointBorderColor:'transparent',
            pointBorderWidth: 4,
            tension: 0.4,
            fill: true
        }]

    }
    const option = {
        responsive: true, // Make the chart responsive
        maintainAspectRatio: false,
        Plugin: {
            legend: false
        },
        scales: {
            x: {
                grid:{
                    display:false
                }
            },
            y: {
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 10
                },
                grid:{
                    borderDash:[10]
                }
            }

        }
    }
    return ( 
        <div className={styles.graph}>
            <Line data={data} options={option}></Line>
        </div>
    );
}
 
export default Graph;