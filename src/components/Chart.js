 import React, { useState } from "react";
 import "../components/chart.css";
 import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
 import ReactApexChart from "react-apexcharts";


  const ApexChart = ()=>{
    const [state, SetState] = useState({
          
        series: [{
            name: 'New Company: $',
            data: [5000, 6000, 7000, 8000, 9000, 7000, 5000]
          },
       ],
          options: {
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            // colors:["#826AF9"],
            xaxis: {
              type: 'month',
              categories: ["January", "February", "March", "April", "May" , "June", "July"]
            },
            yaxis:{
                type: 'bill',
                categories: ["0","2000.00","4000.00","6000.00","8000,00","10000.00"]

            },
            tooltip: {
              x: {
                format: 'month'
              },
              y: {
                format: 'bill'
              },
            },
        
          },
    })

    return(
        <div className="chart">
            <div className="charttop">
                <h4>Payment Recieve</h4>
                <div className="charttopright">
                    <h5>This Year</h5>
                    <KeyboardArrowDownIcon/>
                </div>
            </div>
             <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
        </div>
    )
  }

  export default ApexChart;




