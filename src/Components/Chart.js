import {Pie} from 'react-chartjs-2';
import React from 'react';

// since you're just passing the data down,
// I don't know if this component is really necessary
// just call <Pie /> directly
const PieChart = (props) => (
    <>
        <Pie data={props.data} />
    </>
);
 
export default PieChart;