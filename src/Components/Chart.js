import {Pie} from 'react-chartjs-2';
import React from 'react';

const PieChart = (props) => (
    <>
        <Pie data={props.data} />
    </>
);
 
export default PieChart;