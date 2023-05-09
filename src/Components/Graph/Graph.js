import styles from './Graph.module.css';
import { Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
const Graph = () => {
    const data = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],
        datasets: [{
            data:[0,1000,2000, 4000, 5000, 3000, 2000, 6000, 3000, 1000, 5000, 2000, 500],
            backgroundColor: 'transparent',
            borderColor: "#7373738A",
            pointBorderColor:'transparent',
            pointBorderWidth: 4,
            tension: 0.4
        }]

    }
    const option = {
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
                max: 10000,
                ticks: {
                    stepSize: 1000
                },
                grid:{
                    borderDash:[10000]
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