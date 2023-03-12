
import React, { Component } from 'react'
import { Button} from "semantic-ui-react";
import {Table} from 'semantic-ui-react';
import { Bar, defaults, Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import { useEffect } from "react"

const LineChart = () => {
    return (
        <Bar
        data={{
          labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
          datasets: [
            {
              label: `Usage of Carbon consume`,
              data: [1,2,3,4,5,6],

              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],

              backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            x: 
              {
                ticks: {
                  beginAtZero: true,
                  autoSkip:true,
                },
              },
            
            y: 
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    )

}

export default LineChart