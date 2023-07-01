import styles from './Graph.module.css';
import { connect } from "react-redux";
import { fetchanalytics } from '../../Redux/Dashboard/DashboardAction';
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
const Graph = ({fetchanalytics, analytics}) => {
    const data = {
        labels:[`${analytics?.data?.data?.analyticsData?.map((month)=>{
            return(month.month)   
        })}`],
        datasets: [{
            data:[`${analytics?.data?.data?.analyticsData?.map((month)=>{
                return(month.value)   
            })}`],
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
                max: 10500,
                ticks: {
                    stepSize: 200
                },
                grid:{
                    borderDash:[200]
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
const mapStoreToProps = (state) => {
    return {
      analytics: state.dashboard,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchanalytics: () => dispatch(fetchanalytics()),
    };
};
 
export default connect(mapStoreToProps, mapDispatchToProps)(Graph);