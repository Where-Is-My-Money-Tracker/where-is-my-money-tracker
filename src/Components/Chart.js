import {Pie} from 'react-chartjs-2';
import React from 'react';

const PieChart = (props) => (
    <>
    <div>
        <h1>Pie Chart!</h1>
    </div>
    <Pie data={props.data} />
    </>
);
 
export default PieChart;