import {Pie} from 'react-chartjs-2';
import React, { Component } from 'react';

// class PieChart extends Component {

//     constructor(props) {
//         super(props)
//     this.state = { 

const data = {
        labels: ['description'],
        datasets: [{
            data: ['description', 'total_cost'],
            backgroundColor: [
                'rgba(127, 79, 36, 1)',
                'rgba(147, 102, 57, 1)',
                'rgba(166, 138, 100, 1)',
                'rgba(182, 173, 144, 1)',
                'rgba(194, 197, 170, 1)',
                'rgba(164, 172, 134, 1)',
                'rgba(101, 109, 74, 1)',
                'rgba(65, 72, 51, 1)',
                'rgba(51, 61, 41, 1)'
            ],
            borderColor: [
                'rgba(127, 79, 36, 1)',
                'rgba(147, 102, 57, 1)',
                'rgba(166, 138, 100, 1)',
                'rgba(182, 173, 144, 1)',
                'rgba(194, 197, 170, 1)',
                'rgba(164, 172, 134, 1)',
                'rgba(101, 109, 74, 1)',
                'rgba(65, 72, 51, 1)',
                'rgba(51, 61, 41, 1)'
            ],
            borderWidth: 1,
        }],
     };

//     render() { 
//         return ( 
//             <div>
//                 <h1>Spending Breakdown</h1>
//                 <Pie
//                 data={{
//                     labels: this.state.labels,
//                     datasets: this.state.datasets
//                 }}
//                 height='50%'
//                 />
//                 <br />
//             </div>
//          );
//     }
// } 

const PieChart = () => (
    <>
    <div>
        <h1>Pie Chart!</h1>
    </div>
    <Pie data={data} />
    </>
);
 
export default PieChart;