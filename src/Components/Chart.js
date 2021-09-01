import {Pie} from 'react-chartjs-2';
import React, { Component } from 'react';

const props = {
    "Food":30.91, "Pets":31.7, "Subscriptions":0 , "Self improvement":299, "mortgage":0
} 



    const data = {
        labels: Object.keys(props),
        datasets: [{
            label: 'Yo Money',
            data:  Object.values(props),
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
            height: '50%'
        }]
    }

const PieChart = () => (
    <>
    <div>
        <h1>Pie Chart!</h1>
    </div>
    <Pie data={data} />
    </>
);
 
export default PieChart;