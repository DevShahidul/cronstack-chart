import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = ({data, title, columnGradient}) => {
  const labelStyle = {
    fontSize: '0.75rem',
    color: '#7D8FA9'
  }
    const options = {
      chart: {
        type: 'column',
        backgroundColor: '#1D232C',
        style: {
            color: '#EEF0F4'
        }
      },
      title: {
        text: title,
        align: 'left',
        style: {
            color: '#EEF0F4',
            fontSize: '1rem'
          }
      },
      xAxis: {
        categories: data.map(item => item.name),
        title: {
          text: 'Month',
          enabled: false, // Disable the x-axis title
          style: {
            color: '#ffffff',
            // fontSize: '0.75rem'
          }
        },
        labels: {
            style: labelStyle,
            padding: '8px'
          }
      },
      yAxis: {
        title: {
          text: 'Amount',
          enabled: false, // Disable the x-axis title
          style: {
            color: '#ffffff',
            // fontSize: '0.75rem'
          }
        },
        labels: {
            // enabled: false // Disable the y-axis labels
            style: labelStyle,
            formatter: function () {
              // Convert the amount to a formatted string with "k" suffix
              const amount = this.value / 1000; // Divide by 1000 to get the value in thousands
              return amount + 'k';
            }
          }
      },
      series: [
        {
          name: 'Amount',
          data: data.map(item => item.amt),
          // color: '#EF3CDD' single column color
        }
      ],
      plotOptions: { // gradient column colors option
        column: {
          borderWidth: 0,
          color: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: columnGradient
          }
        }
      },
      credits: {
        enabled: false // Disable the Highcharts credit text
      },
      legend: {
        enabled: false // Disable the Highcharts legend
      },
      // tooltip: {
      //   enabled: false // Disable the tooltip toggle option
      // },
    };
  
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  };

  export default Chart;
  